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
3. **Em números**: 4 anos de estúdio, +50 projetos, +1.000 arquivos e 100% de clientes satisfeitos; contam até o valor final (`data-to`, `data-pre`, `data-suf`).
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

## ANTES de divulgar (2 itens obrigatórios)
1. Receber as propostas: em `proposta/index.html`, preencha `FORM_ENDPOINT` (perto do fim do arquivo)
   com a URL do serviço que recebe POST em JSON (Formspree, Google Apps Script, Make, Zapier, backend próprio).
2. Pré-visualização em redes sociais: em `index.html` e `proposta/index.html`, troque
   `content="/og.png"` pela URL completa, ex.: `content="https://seudominio.com.br/og.png"`.
