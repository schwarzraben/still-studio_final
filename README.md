# STILL STUDIO — Landing Page

Site estático (HTML/CSS/JS puro, sem build), baseado na LP de referência da STILL com melhorias de motion ao rolar.

## Arquivos
- `index.html` → home (/)
- `proposta/index.html` → página de proposta (/proposta)
- `404.html`, `favicon.svg`, `og.png`, `robots.txt`

## Estrutura e motion (home)
1. **Abertura**: só o logo (quadrado, círculo e U) e as cores da marca. As formas entram separadas, o fundo
   troca de preto para vermelho, para claro e volta ao preto, e as formas brincam (giram, quicam, se afastam).
   Ciclo de 12 s; no computador o logo segue levemente o cursor. Arquivo do logo em `logo/Logo_Still.pdf`.
2. **Quem somos**: palavras acendem conforme a rolagem; link para "Nossa história".
3. **Em números**: 4 anos de estúdio, +150 projetos, +1.000 arquivos e 100% de clientes satisfeitos; contam até o valor final (`data-to`, `data-pre`, `data-suf`).
4. **Portfólio**: "Se ainda não viu, venha ver!" + link "Portfólio completo" (troque o `href` pelo link real)
   e 10 cases que andam para o lado enquanto a seção fica presa. Cada quadro abre o projeto completo;
   o conteúdo fica no objeto `CASES` no script (os 10 cases atuais são exemplos para trocar pelos reais).
5. **Bora criar um projeto juntos?**: chamada com botão circular girando.
6. **Serviços**: palavras grandes que andam para o lado com a rolagem; cada uma abre a proposta com o serviço marcado.
7. **Vamos conversar**: a palavra final troca sozinha, a pessoa escolhe o serviço
   e o botão leva para `/proposta?servico=...`, que já abre o formulário com o serviço marcado.
8. **Rodapé**: a palavra STILL em letras grandes vermelhas que sobem ao aparecer.

Página **Nossa história** em `historia/index.html` (/historia): texto curto da história e chamada para a proposta.

## Idiomas
Arquivos compartilhados pelas três páginas: `assets/site.js` e `assets/site.css`.
Português (padrão), inglês e espanhol. Na primeira visita o site segue o idioma do navegador;
a escolha no botão PT/EN/ES do menu fica salva. Para traduzir um texto novo, adicione uma linha no `DICT`
de `assets/site.js`: `"texto em português": ["English", "Español"]`. Os cases também são traduzidos por ali.

## Versão B (teste)
`versao-b/index.html` (/versao-b) é uma alternativa no formato de página de conversão, guardada para comparação.
Está marcada com `noindex`.

## Publicar
Funciona em qualquer hospedagem estática (Vercel, Netlify, Cloudflare Pages, GitHub Pages): envie a pasta inteira.

## Propostas por e-mail
O formulário (`proposta/index.html`) envia cada proposta por e-mail pelo FormSubmit (formsubmit.co, gratuito).
O e-mail chega com o assunto "Nova proposta pelo site: Nome (Empresa)", os campos em tabela e o "Responder"
indo para o cliente.

**Nenhum endereço fica no código.** O destino vem do secret `FORM_ENDPOINT`, que o GitHub Actions
(`.github/workflows/pages.yml`) grava em `assets/config.js` só na hora de publicar (esse arquivo não é versionado).

Configuração (uma vez):
1. **Settings → Pages → Build and deployment → Source:** escolha **GitHub Actions**.
2. **Settings → Secrets and variables → Actions → New repository secret:**
   nome `FORM_ENDPOINT`, valor `https://formsubmit.co/ajax/SEU-EMAIL` (o e-mail que vai receber as propostas).
3. Em **Actions**, rode "Publicar site" (ou faça qualquer push no `main`).
4. Envie uma proposta de teste pelo site. O FormSubmit manda "Action Required: Activate Form" para o e-mail;
   clique em **Activate Form**.
5. Para o e-mail não aparecer nem no navegador: o FormSubmit envia um **endereço alternativo** (sequência de letras).
   Troque o secret para `https://formsubmit.co/ajax/ENDEREÇO-ALTERNATIVO` e publique de novo.

Testes locais: crie `assets/config.js` com `window.STILL_CONFIG={formEndpoint:"..."}` (ele é ignorado pelo git).

Atenção: tudo o que o navegador usa para enviar o formulário é visível para quem inspecionar a página.
Por isso o site não usa nenhuma chave secreta; o endereço alternativo do FormSubmit é feito para ficar público.

## Segurança
**Publicação:** o GitHub Actions roda `tools/build.js`, que monta a pasta publicada e:
- publica só o necessário (ficam de fora `versao-b/`, `logo/`, `logos/`, `tools/`, `README.md`, `_headers` e `.github/`);
- gera `assets/config.js` a partir do secret `FORM_ENDPOINT`;
- coloca em cada página um **Content-Security-Policy** com o hash de cada script embutido
  (só scripts do próprio site, estilos e fontes do Google Fonts, envio apenas para formsubmit.co,
  sem `object`/`embed`, `base-uri` e `form-action` restritos) e `Referrer-Policy`;
- **interrompe a publicação** se encontrar dado com cara de credencial, recurso por `http://` ou
  handler inline (`onclick=` etc.).

Se editar um `<script>` dentro de uma página, não precisa fazer nada: os hashes são recalculados a cada publicação.
Para testar localmente: `node tools/build.js` e abra a pasta `_site` num servidor local.

**Limite do GitHub Pages:** ele não permite cabeçalhos HTTP próprios. Por isso o CSP vai como `<meta>`, e proteções
que só existem como cabeçalho (como `X-Frame-Options` e `frame-ancestors`) não se aplicam lá. O arquivo `_headers`
já traz esses cabeçalhos para Netlify ou Cloudflare Pages, caso o site mude de hospedagem.

**Formulário (antispam):**
- campo-armadilha invisível (honeypot), verificado no navegador e enviado ao FormSubmit como `_honey`;
- envio feito em menos de 5 segundos é tratado como robô: mostra "sucesso" e não envia nada;
- no mesmo navegador: intervalo mínimo de 1 minuto entre envios e no máximo 3 por hora;
- limite de tamanho em todos os campos e remoção de caracteres de controle;
- no servidor, o FormSubmit aplica o próprio filtro de spam e limite de envios.
As regras do navegador podem ser contornadas por quem enviar direto ao FormSubmit; o filtro do serviço cobre esse caso.

**Dependências:** o site não usa bibliotecas JavaScript nem pacotes npm. As únicas dependências são as GitHub Actions
da publicação, presas por commit (SHA) nas versões mais recentes (checkout v7.0.1, configure-pages v6.0.0,
upload-pages-artifact v5.0.0, deploy-pages v5.0.1). O Dependabot (`.github/dependabot.yml`) abre um pull request
quando sair versão nova.

## HTTPS
- No GitHub Pages (`*.github.io`) o site é servido só por HTTPS, e o próprio GitHub redireciona HTTP para HTTPS.
- Reforço nas páginas: todas carregam a regra `upgrade-insecure-requests` e um redirecionamento imediato de
  `http://` para `https://` no mesmo endereço (fica de fora só o teste local em `localhost`).
- Todos os recursos externos (fontes do Google e FormSubmit) usam HTTPS.
- Se usar domínio próprio: em **Settings → Pages → Custom domain**, depois que o certificado for emitido,
  marque **Enforce HTTPS** e troque o endereço de `og:image` em `index.html` e `proposta/index.html`.

## ANTES de divulgar
1. Configurar o secret `FORM_ENDPOINT` e ativar o FormSubmit (passos acima).
2. Pré-visualização em redes sociais: `og:image` já aponta para
   `https://schwarzraben.github.io/still-studio_final/og.png`; troque se o site mudar de endereço.
