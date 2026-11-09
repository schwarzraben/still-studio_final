#!/usr/bin/env node
/* Monta a pasta publicada (_site) do site estático, sem dependências externas.
   - copia só os arquivos públicos (o que está em EXCLUDE não vai para o ar);
   - gera assets/config.js a partir da variável de ambiente FORM_ENDPOINT (secret do GitHub);
   - aplica em cada página um Content-Security-Policy com o hash de cada <script> embutido;
   - falha a publicação se encontrar handlers inline (onclick=...), http:// em recursos ou dados sensíveis.
   Uso: FORM_ENDPOINT="https://formsubmit.co/ajax/..." node tools/build.js [pasta-de-saída] */
"use strict";
const fs = require("fs"), path = require("path"), crypto = require("crypto");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.resolve(process.argv[2] || path.join(ROOT, "_site"));
const EXCLUDE = new Set([".git", ".github", "tools", "_site", "node_modules", "README.md", "_headers", ".gitignore",
  "versao-b",   // versão de teste: não é publicada
  "logo",       // arquivo-fonte do logo (PDF): não é usado pelas páginas
  "logos"]);    // pasta vazia reservada para logos de clientes

const FORM_ENDPOINT = (process.env.FORM_ENDPOINT || "").trim();
if (FORM_ENDPOINT && !/^https:\/\/formsubmit\.co\/ajax\/[^\s"'<>]+$/.test(FORM_ENDPOINT)) {
  fail("FORM_ENDPOINT precisa ser https://formsubmit.co/ajax/<endereço>.");
}

const CSP = (scriptHashes) => [
  "default-src 'self'",
  "script-src 'self' " + scriptHashes.join(" "),
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src https://fonts.gstatic.com",
  "img-src 'self' data:",
  "connect-src 'self' https://formsubmit.co",
  "form-action 'self' https://formsubmit.co",
  "base-uri 'self'",
  "object-src 'none'",
  "manifest-src 'self'",
  "worker-src 'none'",
  "upgrade-insecure-requests"
].join("; ");

function fail(msg) { console.error("::error::" + msg); process.exit(1); }

function copy(src, dst) {
  for (const name of fs.readdirSync(src)) {
    if (src === ROOT && EXCLUDE.has(name)) continue;
    const s = path.join(src, name), d = path.join(dst, name);
    if (fs.statSync(s).isDirectory()) { fs.mkdirSync(d, { recursive: true }); copy(s, d); }
    else fs.copyFileSync(s, d);
  }
}

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    fs.statSync(p).isDirectory() ? walk(p, out) : out.push(p);
  }
  return out;
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
copy(ROOT, OUT);

/* assets/config.js: o único lugar onde o destino do formulário aparece, e só na versão publicada */
if (!FORM_ENDPOINT) console.warn("::warning::FORM_ENDPOINT não definido: o formulário de proposta não vai enviar.");
fs.writeFileSync(path.join(OUT, "assets", "config.js"),
  "window.STILL_CONFIG=" + JSON.stringify({ formEndpoint: FORM_ENDPOINT }) + ";\n");

/* valores com cara de credencial: atribuições (chave = "valor longo") e formatos conhecidos de tokens */
const SENSITIVE = /((api[_-]?key|secret|token|passw(or)?d|senha|access[_-]?key)["']?\s*[:=]\s*["'][^"'\s]{8,}|bearer\s+[a-z0-9._-]{16,}|AKIA[0-9A-Z]{12}|gh[pousr]_[A-Za-z0-9]{20}|AIza[0-9A-Za-z_-]{30}|sk-[A-Za-z0-9]{20}|-----BEGIN [A-Z ]*PRIVATE KEY)/i;

for (const file of walk(OUT)) {
  const rel = path.relative(OUT, file);
  if (!/\.(html|js|css|txt|svg|json)$/.test(file)) continue;
  let src = fs.readFileSync(file, "utf8");
  if (rel !== path.join("assets", "config.js") && SENSITIVE.test(src)) fail("Possível dado sensível em " + rel);
  if (/\.(html|css|js)$/.test(file)) {
    const insecure = src.match(/(?:src|href|url\()\s*=?\s*["']?http:\/\/[^"')\s]+/i);
    if (insecure) fail("Recurso carregado por http:// em " + rel + ": " + insecure[0]);
  }
  if (!file.endsWith(".html")) continue;

  if (/\son[a-z]+\s*=\s*["']/i.test(src.replace(/<script[\s\S]*?<\/script>/gi, ""))) fail("Handler inline (on...=) em " + rel + ": bloqueado pelo CSP.");

  /* hash de cada <script> embutido (sem src) para o script-src */
  const hashes = [];
  src.replace(/<script>([\s\S]*?)<\/script>/g, (_, code) => {
    hashes.push("'sha256-" + crypto.createHash("sha256").update(code, "utf8").digest("base64") + "'");
  });
  const meta = '<meta http-equiv="Content-Security-Policy" content="' + CSP([...new Set(hashes)]) + '">\n' +
               '<meta name="referrer" content="strict-origin-when-cross-origin">';
  const before = src;
  src = src.replace(/<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">/, meta);
  if (src === before) fail("Página sem a meta de segurança para substituir: " + rel);
  fs.writeFileSync(file, src);
  console.log("CSP aplicado:", rel, "(" + hashes.length + " scripts embutidos)");
}
console.log("Site montado em", OUT);
