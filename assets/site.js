/* STILL STUDIO — escolha de idioma (PT/EN/ES), compartilhada pelas páginas.
   Carregar no fim do <body>, ANTES do script da página: a tradução acontece antes das animações montarem os textos.
   Para traduzir um texto novo, adicione uma linha em DICT: "texto em português": ["English", "Español"]. */
(function(){
 var root=document.documentElement;
 function get(k){try{return localStorage.getItem(k)}catch(e){return null}}
 function set(k,v){try{v==null?localStorage.removeItem(k):localStorage.setItem(k,v)}catch(e){}}

 /* ---------- dicionário ---------- */
 var DICT={
  /* menu e geral */
  "Portfólio":["Portfolio","Portafolio"],"Serviços":["Services","Servicios"],"Nossa história":["Our story","Nuestra historia"],"Contato":["Contact","Contacto"],
  "Solicitar proposta":["Request a proposal","Solicitar propuesta"],"Solicitar proposta ↗":["Request a proposal ↗","Solicitar propuesta ↗"],"Proposta":["Proposal","Propuesta"],
  "STILL STUDIO, estúdio criativo":["STILL STUDIO, creative studio","STILL STUDIO, estudio creativo"],"Estúdio criativo":["Creative studio","Estudio creativo"],
  "STILL STUDIO, início":["STILL STUDIO, home","STILL STUDIO, inicio"],"Seções":["Sections","Secciones"],"Principal":["Main","Principal"],"Rodapé":["Footer","Pie de página"],
  "© 2026 STILL STUDIO · Estúdio criativo":["© 2026 STILL STUDIO · Creative studio","© 2026 STILL STUDIO · Estudio creativo"],
  "STILL STUDIO | Estúdio criativo":["STILL STUDIO | Creative studio","STILL STUDIO | Estudio creativo"],
  "Branding e identidade visual, social media e motion design. A STILL STUDIO conecta estratégia, criatividade e design.":["Branding and visual identity, social media and motion design. STILL STUDIO connects strategy, creativity and design.","Branding e identidad visual, redes sociales y motion design. STILL STUDIO conecta estrategia, creatividad y diseño."],
    /* quem somos e números */
  "Quem somos":["Who we are","Quiénes somos"],
  "Uma marca bonita chama atenção. Uma marca bem pensada é entendida, escolhida e lembrada.":["A beautiful brand gets attention. A well-thought-out brand is understood, chosen and remembered.","Una marca bonita llama la atención. Una marca bien pensada es entendida, elegida y recordada."],
  "@hl":["understood|remembered","entendida|recordada"],
  "Em números":["In numbers","En números"],"Anos de estúdio":["Years of studio","Años de estudio"],"Quatro anos criando marcas, campanhas e projetos culturais.":["Four years creating brands, campaigns and cultural projects.","Cuatro años creando marcas, campañas y proyectos culturales."],
  "Projetos entregues":["Projects delivered","Proyectos entregados"],"De identidades completas a campanhas e peças de motion.":["From full identities to campaigns and motion pieces.","De identidades completas a campañas y piezas de motion."],
  "Arquivos criados":["Files created","Archivos creados"],"Peças para o digital e o impresso, prontas para usar.":["Pieces for digital and print, ready to use.","Piezas para digital e impreso, listas para usar."],
  "Clientes satisfeitos":["Satisfied clients","Clientes satisfechos"],"Cada projeto acompanhado de perto, do briefing à entrega.":["Every project followed closely, from brief to delivery.","Cada proyecto acompañado de cerca, del briefing a la entrega."],
  /* portfólio */
  "Se ainda não viu, venha ver!":["If you haven't seen it yet, come and see!","Si aún no lo viste, ¡ven a verlo!"],"Portfólio completo":["Full portfolio","Portafolio completo"],
  "/ 10 · role para o lado":["/ 10 · scroll sideways","/ 10 · desliza hacia el lado"],"Abrir projeto":["Open project","Abrir proyecto"],
  "Projeto":["Project","Proyecto"],"Fechar":["Close","Cerrar"],"Serviço":["Service","Servicio"],"Formato":["Format","Formato"],"Entregáveis":["Deliverables","Entregables"],
  "O desafio":["The challenge","El desafío"],"Como resolvemos":["How we solved it","Cómo lo resolvimos"],"Próximo projeto":["Next project","Siguiente proyecto"],
  "Quero um projeto assim":["I want a project like this","Quiero un proyecto así"],
  /* chamada, serviços e contato */
  "Bora criar um projeto":["Shall we create a project","¿Creamos un proyecto"],"juntos?":["together?","juntos?"],
  "Bora criar um projeto juntos?":["Shall we create a project together?","¿Creamos un proyecto juntos?"],
  "Conte a sua ideia no formulário. A gente responde com os próximos passos e uma proposta feita para o seu projeto.":["Tell us your idea in the form. We'll reply with the next steps and a proposal made for your project.","Cuéntanos tu idea en el formulario. Te respondemos con los próximos pasos y una propuesta hecha para tu proyecto."],
  "criar juntos · criar juntos · criar juntos ·":["create together · create together · create together ·","crear juntos · crear juntos · crear juntos ·"],
  "Começar um projeto juntos":["Start a project together","Empezar un proyecto juntos"],
  "Nossos serviços":["Our services","Nuestros servicios"],"O que a gente faz":["What we do","Lo que hacemos"],"O que a gente faz.":["What we do.","Lo que hacemos."],
  "Três frentes que se conectam para dar à sua marca uma presença consistente, do símbolo ao movimento.":["Three fronts that connect to give your brand a consistent presence, from symbol to motion.","Tres frentes que se conectan para dar a tu marca una presencia consistente, del símbolo al movimiento."],
  "Branding":["Branding","Branding"],"Identidade visual":["Visual identity","Identidad visual"],"Social media":["Social media","Redes sociales"],"Direção de arte":["Art direction","Dirección de arte"],
  "Motion design":["Motion design","Motion design"],"Animação":["Animation","Animación"],
  "Vamos conversar":["Let's talk","Hablemos"],"Vamos dar vida":["Let's bring to life","Demos vida"],"a":["",""],
  "Vamos dar vida à sua marca.":["Let's bring your brand to life.","Demos vida a tu marca."],
  "sua marca.":["your brand.","a tu marca."],"seu feed.":["your feed.","a tu feed."],"sua ideia.":["your idea.","a tu idea."],"seu evento.":["your event.","a tu evento."],"seu produto.":["your product.","a tu producto."],
  "Do que você precisa?":["What do you need?","¿Qué necesitas?"],"Marca e identidade":["Brand and identity","Marca e identidad"],"Feed e campanhas":["Feed and campaigns","Feed y campañas"],
  "Marca em movimento":["Brand in motion","Marca en movimiento"],"Ainda não sei":["Not sure yet","Aún no lo sé"],"A gente descobre junto":["We'll figure it out together","Lo descubrimos juntos"],
  "Escolha o que você precisa e":["Choose what you need and","Elige lo que necesitas y"],"a gente já começa a conversa com isso em mente.":["we'll start the conversation with that in mind.","empezamos la conversación con eso en mente."],
  "Falar sobre":["Talk about","Hablar de"],"branding":["branding","branding"],"social media":["social media","redes sociales"],"motion design":["motion design","motion design"],"o seu projeto":["your project","tu proyecto"],
  "Perfeito. O formulário já abre com":["Great. The form opens with","Perfecto. El formulario se abre con"],"marcado.":["already selected.","ya marcado."],
  /* cases: textos */
  "Marca":["Brand","Marca"],"Branding e identidade visual":["Branding and visual identity","Branding e identidad visual"],
  "Uma identidade construída do conceito ao sistema: símbolo, cores, tipografia e regras para usar tudo com consistência.":["An identity built from concept to system: symbol, colors, typography and rules to use it all consistently.","Una identidad construida del concepto al sistema: símbolo, colores, tipografía y reglas para usarlo todo con consistencia."],
  "Digital e impresso":["Digital and print","Digital e impreso"],
  "Dar à marca uma presença reconhecível, que funcione do perfil nas redes à fachada, sem perder a personalidade em nenhum ponto de contato.":["Give the brand a recognizable presence that works from the social profile to the storefront, without losing its personality at any touchpoint.","Dar a la marca una presencia reconocible que funcione del perfil en redes a la fachada, sin perder la personalidad en ningún punto de contacto."],
  "Começamos por uma conversa sobre o negócio e o público. Com o conceito definido, desenhamos o símbolo sobre um grid de construção e, a partir dele, chegamos à paleta, à tipografia e ao manual de uso.":["We started with a conversation about the business and the audience. With the concept defined, we drew the symbol on a construction grid and, from it, arrived at the palette, the typography and the usage guide.","Empezamos con una conversación sobre el negocio y el público. Con el concepto definido, dibujamos el símbolo sobre una retícula de construcción y, a partir de él, llegamos a la paleta, la tipografía y el manual de uso."],
  "Uma linha visual para redes, com templates e direção de arte que deixam o feed consistente e fácil de manter.":["A visual line for social media, with templates and art direction that keep the feed consistent and easy to maintain.","Una línea visual para redes, con plantillas y dirección de arte que dejan el feed consistente y fácil de mantener."],
  "Instagram, LinkedIn e TikTok":["Instagram, LinkedIn and TikTok","Instagram, LinkedIn y TikTok"],
  "Publicar com frequência sem que cada post pareça de uma marca diferente, e ainda abrir espaço para campanhas com cara própria.":["Post often without every post looking like a different brand, while leaving room for campaigns with their own look.","Publicar con frecuencia sin que cada post parezca de una marca distinta, y aún abrir espacio para campañas con identidad propia."],
  "Definimos uma grade, hierarquia de textos e um conjunto de templates editáveis. As campanhas ganham variações de cor e composição dentro do mesmo sistema.":["We defined a grid, a text hierarchy and a set of editable templates. Campaigns get color and layout variations within the same system.","Definimos una retícula, jerarquía de textos y un conjunto de plantillas editables. Las campañas ganan variaciones de color y composición dentro del mismo sistema."],
  "Animações que dão ritmo à marca: vinhetas, logos animados e peças curtas para reels.":["Animations that give the brand rhythm: idents, animated logos and short pieces for reels.","Animaciones que dan ritmo a la marca: cortinillas, logos animados y piezas cortas para reels."],
  "MP4, GIF e Lottie":["MP4, GIF and Lottie","MP4, GIF y Lottie"],
  "Fazer a marca se mover de um jeito próprio, com movimentos que reforcem a personalidade em vez de só enfeitar.":["Make the brand move in its own way, with motion that reinforces its personality instead of just decorating.","Hacer que la marca se mueva a su manera, con movimientos que refuercen la personalidad en lugar de solo adornar."],
  "Criamos um storyboard, escolhemos curvas de movimento que combinam com a marca e animamos quadro a quadro até chegar ao ritmo certo, com versões para cada formato.":["We created a storyboard, chose motion curves that suit the brand and animated frame by frame until we found the right rhythm, with versions for each format.","Creamos un storyboard, elegimos curvas de movimiento acordes a la marca y animamos cuadro a cuadro hasta llegar al ritmo justo, con versiones para cada formato."],
  "Cartaz":["Poster","Cartel"],"Identidade para projetos culturais":["Identity for cultural projects","Identidad para proyectos culturales"],
  "Identidades para eventos, exposições e festivais, do cartaz principal às peças digitais de divulgação.":["Identities for events, exhibitions and festivals, from the main poster to digital promotion pieces.","Identidades para eventos, exposiciones y festivales, del cartel principal a las piezas digitales de difusión."],
  "Impressão e redes":["Print and social media","Impresión y redes"],
  "Criar uma imagem forte o bastante para a rua e flexível o bastante para dezenas de formatos, do ingresso ao banner.":["Create an image strong enough for the street and flexible enough for dozens of formats, from the ticket to the banner.","Crear una imagen lo bastante fuerte para la calle y lo bastante flexible para decenas de formatos, de la entrada al banner."],
  "Partimos de um key visual simples, com formas e tipografia marcantes, e desdobramos em um sistema de peças que mantém a mesma assinatura em qualquer tamanho.":["We started from a simple key visual, with striking shapes and type, and unfolded it into a system of pieces that keeps the same signature at any size.","Partimos de un key visual simple, con formas y tipografía marcadas, y lo desplegamos en un sistema de piezas que mantiene la misma firma en cualquier tamaño."],
  "Packaging":["Packaging","Packaging"],"Embalagem":["Packaging","Empaque"],
  "Embalagens que fazem o produto ser reconhecido na prateleira, do rótulo à caixa.":["Packaging that makes the product recognizable on the shelf, from label to box.","Empaques que hacen que el producto sea reconocido en el estante, de la etiqueta a la caja."],
  "Impressão em papel e cartão":["Print on paper and board","Impresión en papel y cartón"],
  "Fazer o produto ser reconhecido em poucos segundos, mesmo ao lado dos concorrentes.":["Make the product recognizable in a few seconds, even next to competitors.","Hacer que el producto se reconozca en pocos segundos, incluso junto a la competencia."],
  "Partimos da identidade da marca e criamos um sistema de cores, selo e hierarquia de informação que funciona em todos os tamanhos de embalagem.":["We started from the brand identity and created a system of colors, seal and information hierarchy that works on every package size.","Partimos de la identidad de la marca y creamos un sistema de colores, sello y jerarquía de información que funciona en todos los tamaños de empaque."],
  "Esporte":["Sports","Deporte"],"Identidade esportiva":["Sports identity","Identidad deportiva"],
  "Uma identidade para time e evento esportivo, do escudo ao uniforme e às peças de dia de jogo.":["An identity for a sports team and event, from the crest to the kit and game-day pieces.","Una identidad para equipo y evento deportivo, del escudo al uniforme y las piezas de día de partido."],
  "Têxtil, impresso e redes":["Textile, print and social media","Textil, impreso y redes"],
  "Criar uma imagem que a torcida queira vestir e que funcione de longe, no campo, e de perto, no celular.":["Create an image fans want to wear that works from afar, on the field, and up close, on the phone.","Crear una imagen que la afición quiera vestir y que funcione de lejos, en la cancha, y de cerca, en el celular."],
  "Desenhamos o escudo a partir da história do projeto e o desdobramos em uniforme, numeração e templates para os dias de jogo.":["We drew the crest from the project's history and unfolded it into the kit, numbering and game-day templates.","Dibujamos el escudo a partir de la historia del proyecto y lo desplegamos en uniforme, numeración y plantillas para los días de partido."],
  "Campanha":["Campaign","Campaña"],"Campanha digital":["Digital campaign","Campaña digital"],
  "Uma campanha pensada para o digital, com peças que mantêm a mesma ideia em todos os formatos.":["A campaign designed for digital, with pieces that keep the same idea across every format.","Una campaña pensada para lo digital, con piezas que mantienen la misma idea en todos los formatos."],
  "Redes, site e mídia paga":["Social media, website and paid media","Redes, sitio web y medios pagados"],
  "Fazer a mensagem aparecer igual em dezenas de formatos e tamanhos, sem perder força em nenhum deles.":["Make the message look the same across dozens of formats and sizes, without losing strength in any of them.","Hacer que el mensaje aparezca igual en decenas de formatos y tamaños, sin perder fuerza en ninguno."],
  "Criamos um key visual forte e um sistema de adaptação com regras simples, para que cada peça nova saia rápida e consistente.":["We created a strong key visual and an adaptation system with simple rules, so each new piece comes out fast and consistent.","Creamos un key visual fuerte y un sistema de adaptación con reglas simples, para que cada pieza nueva salga rápida y consistente."],
  "Wayfinding":["Wayfinding","Señalética"],"Sinalização de espaço":["Wayfinding system","Señalización de espacios"],
  "Um sistema de sinalização que ajuda as pessoas a se orientarem e reforça a marca no espaço físico.":["A signage system that helps people find their way and reinforces the brand in physical space.","Un sistema de señalización que ayuda a las personas a orientarse y refuerza la marca en el espacio físico."],
  "Placas, adesivos e totens":["Signs, stickers and totems","Placas, adhesivos y tótems"],
  "Guiar quem chega pela primeira vez sem poluir o ambiente, com informação clara à distância.":["Guide first-time visitors without cluttering the space, with information that's clear from a distance.","Guiar a quien llega por primera vez sin contaminar el ambiente, con información clara a distancia."],
  "Mapeamos os percursos, definimos a hierarquia das informações e desenhamos placas e pictogramas a partir da tipografia e das cores da marca.":["We mapped the routes, defined the information hierarchy and designed signs and pictograms from the brand's typography and colors.","Mapeamos los recorridos, definimos la jerarquía de la información y diseñamos placas y pictogramas a partir de la tipografía y los colores de la marca."],
  "Motion":["Motion","Motion"],"Vinheta de abertura":["Opening ident","Cortinilla de apertura"],
  "Uma abertura animada que apresenta a marca em poucos segundos, para vídeos, eventos e redes.":["An animated opener that introduces the brand in a few seconds, for videos, events and social media.","Una apertura animada que presenta la marca en pocos segundos, para videos, eventos y redes."],
  "MP4 em 16:9 e 9:16":["MP4 in 16:9 and 9:16","MP4 en 16:9 y 9:16"],
  "Apresentar a marca em menos de dez segundos de um jeito que as pessoas lembrem.":["Introduce the brand in under ten seconds in a way people remember.","Presentar la marca en menos de diez segundos de una forma que la gente recuerde."],
  "Escrevemos um roteiro curto, desenhamos cada quadro-chave e animamos com movimentos que seguem a personalidade da marca.":["We wrote a short script, drew each keyframe and animated it with motion that follows the brand's personality.","Escribimos un guion corto, dibujamos cada cuadro clave y animamos con movimientos que siguen la personalidad de la marca."],
  "Editorial":["Editorial","Editorial"],"Cardápio e impressos":["Menu and print","Menú e impresos"],
  "Peças impressas que levam a identidade para a mesa, do cardápio ao jogo americano.":["Printed pieces that bring the identity to the table, from the menu to the placemat.","Piezas impresas que llevan la identidad a la mesa, del menú al mantel individual."],
  "Impressão offset e digital":["Offset and digital printing","Impresión offset y digital"],
  "Organizar muita informação de um jeito fácil de ler e que tenha a cara da casa.":["Organize a lot of information in a way that's easy to read and feels like the place.","Organizar mucha información de forma fácil de leer y que tenga la cara de la casa."],
  "Definimos um grid, uma hierarquia tipográfica clara e detalhes gráficos da marca que guiam o olhar página a página.":["We defined a grid, a clear type hierarchy and graphic brand details that guide the eye page by page.","Definimos una retícula, una jerarquía tipográfica clara y detalles gráficos de la marca que guían la mirada página a página."],
  /* cases: etiquetas e legendas */
  "Logotipo":["Logo","Logotipo"],"Paleta":["Palette","Paleta"],"Tipografia":["Typography","Tipografía"],"Manual de marca":["Brand guide","Manual de marca"],"Templates":["Templates","Plantillas"],
  "Feed":["Feed","Feed"],"Campanhas":["Campaigns","Campañas"],"Stories":["Stories","Stories"],"Logo animado":["Animated logo","Logo animado"],"Vinhetas":["Idents","Cortinillas"],"Reels":["Reels","Reels"],
  "Key visual":["Key visual","Key visual"],"Peças digitais":["Digital pieces","Piezas digitales"],"Rótulo":["Label","Etiqueta"],"Caixa":["Box","Caja"],"Selo":["Seal","Sello"],
  "Escudo":["Crest","Escudo"],"Uniforme":["Kit","Uniforme"],"Peças de jogo":["Game-day pieces","Piezas de partido"],"Banners":["Banners","Banners"],"Anúncios":["Ads","Anuncios"],
  "Placas":["Signs","Placas"],"Pictogramas":["Pictograms","Pictogramas"],"Manual de aplicação":["Application guide","Manual de aplicación"],"Roteiro":["Script","Guion"],"Trilha":["Soundtrack","Banda sonora"],
  "Cardápio":["Menu","Menú"],"Papelaria":["Stationery","Papelería"],"Diagramação":["Layout","Diagramación"],
  "Paleta de cores":["Color palette","Paleta de colores"],"Cartão de visita":["Business card","Tarjeta de presentación"],"Templates de post":["Post templates","Plantillas de post"],
  "Grade do feed":["Feed grid","Cuadrícula del feed"],"Storyboard":["Storyboard","Storyboard"],"Curva de movimento":["Motion curve","Curva de movimiento"],"Versões do cartaz":["Poster versions","Versiones del cartel"],
  "Ingresso":["Ticket","Entrada"],"Banner digital":["Digital banner","Banner digital"],"Planificação":["Dieline","Troquel"],"Família de produtos":["Product family","Familia de productos"],
  "Numeração":["Numbering","Numeración"],"Dia de jogo":["Game day","Día de partido"],"Formatos":["Formats","Formatos"],"Anúncio":["Ad","Anuncio"],"Totem":["Totem","Tótem"],
  "Placa de porta":["Door sign","Placa de puerta"],"Quadros-chave":["Keyframes","Cuadros clave"],"Linha do tempo":["Timeline","Línea de tiempo"],"Versão vertical":["Vertical version","Versión vertical"],
  "Grid de página":["Page grid","Retícula de página"],"Hierarquia":["Hierarchy","Jerarquía"],"Jogo americano":["Placemat","Mantel individual"],
  /* anotações nos desenhos */
  "símbolo v.03":["symbol v.03","símbolo v.03"],"comentários":["comments","comentarios"],"50 × 70 cm · serigrafia":["50 × 70 cm · screen print","50 × 70 cm · serigrafía"],
  "caixa 12 × 12 × 18 cm":["box 12 × 12 × 18 cm","caja 12 × 12 × 18 cm"],"uniforme · temporada 2026":["kit · 2026 season","uniforme · temporada 2026"],
  "banner · stories · anúncios":["banner · stories · ads","banner · stories · anuncios"],"placa A · 60 cm":["sign A · 60 cm","placa A · 60 cm"],
  "cardápio · 16 páginas":["menu · 16 pages","menú · 16 páginas"],"ritmo: 1 destaque a cada 3 posts":["rhythm: 1 highlight every 3 posts","ritmo: 1 destacado cada 3 posts"],
  "+ 1,2 mil":["+ 1.2k","+ 1,2 mil"],
  /* nossa história */
  "← Voltar ao site":["← Back to site","← Volver al sitio"],"Voltar ao site":["Back to site","Volver al sitio"],
  "A STILL nasceu há 4 anos com uma ideia simples:":["STILL was born 4 years ago with a simple idea:","STILL nació hace 4 años con una idea simple:"],
  "pensar antes de desenhar.":["think before you draw.","pensar antes de dibujar."],
  "De lá pra cá, foram mais de 50 projetos entregues para marcas, empresas, projetos culturais e iniciativas que acreditam que um design bem pensado faz a marca ser entendida, escolhida e lembrada.":["Since then, we've delivered more than 50 projects for brands, companies, cultural projects and initiatives that believe well-thought-out design makes a brand understood, chosen and remembered.","Desde entonces, entregamos más de 50 proyectos para marcas, empresas, proyectos culturales e iniciativas que creen que un diseño bien pensado hace que la marca sea entendida, elegida y recordada."],
  "Sua marca pode ser a próxima.":["Your brand could be next.","Tu marca puede ser la próxima."],
  "STILL STUDIO, voltar para a página inicial":["STILL STUDIO, back to home page","STILL STUDIO, volver a la página de inicio"],
  "A história da STILL STUDIO: um estúdio criativo que pensa antes de desenhar.":["The story of STILL STUDIO: a creative studio that thinks before it draws.","La historia de STILL STUDIO: un estudio creativo que piensa antes de dibujar."],
  "Nossa história | STILL STUDIO":["Our story | STILL STUDIO","Nuestra historia | STILL STUDIO"],
  "Marcas, empresas e projetos que fazem parte da história da STILL STUDIO.":["Brands, companies and projects that are part of STILL STUDIO's story.","Marcas, empresas y proyectos que forman parte de la historia de STILL STUDIO."],
  /* proposta */
  "Solicitar proposta | STILL STUDIO":["Request a proposal | STILL STUDIO","Solicitar propuesta | STILL STUDIO"],
  "Conte sobre o seu projeto e solicite uma proposta da STILL STUDIO.":["Tell us about your project and request a proposal from STILL STUDIO.","Cuéntanos sobre tu proyecto y solicita una propuesta de STILL STUDIO."],
  "Solicite uma proposta.":["Request a proposal.","Solicita una propuesta."],
  "@h1prop":["<span class=\"wd\" style=\"--i:0\"><span>Request</span></span> <span class=\"wd\" style=\"--i:1\"><span>a</span></span> <span class=\"wd\" style=\"--i:2\"><span>proposal<span class=\"dot\">.</span></span></span>","<span class=\"wd\" style=\"--i:0\"><span>Solicita</span></span> <span class=\"wd\" style=\"--i:1\"><span>una</span></span> <span class=\"wd\" style=\"--i:2\"><span>propuesta<span class=\"dot\">.</span></span></span>"],
  "Conte sobre o seu projeto em três etapas rápidas. Com base nas suas respostas, nossa equipe entra em contato com os próximos passos.":["Tell us about your project in three quick steps. Based on your answers, our team will get in touch with the next steps.","Cuéntanos sobre tu proyecto en tres pasos rápidos. Con base en tus respuestas, nuestro equipo te contactará con los próximos pasos."],
  "Formulário de proposta":["Proposal form","Formulario de propuesta"],"Progresso":["Progress","Progreso"],
  "Contato":["Contact","Contacto"],"Negócio":["Business","Negocio"],"Projeto":["Project","Proyecto"],
  "Etapa":["Step","Paso"],"de":["of","de"],"Etapa 1 de 3":["Step 1 of 3","Paso 1 de 3"],
  "Dados de contato":["Contact details","Datos de contacto"],"Como podemos falar com você?":["How can we reach you?","¿Cómo podemos hablar contigo?"],
  "Nome completo":["Full name","Nombre completo"],"E-mail":["Email","Correo electrónico"],"WhatsApp":["WhatsApp","WhatsApp"],"Instagram":["Instagram","Instagram"],"(opcional)":["(optional)","(opcional)"],
  "Sobre o seu negócio":["About your business","Sobre tu negocio"],"Um pouco de contexto sobre quem somos juntos.":["A bit of context about who you are.","Un poco de contexto sobre quiénes son."],
  "Nome da empresa ou do projeto":["Company or project name","Nombre de la empresa o del proyecto"],"Tamanho da equipe":["Team size","Tamaño del equipo"],"Selecione uma opção":["Select an option","Selecciona una opción"],
  "Profissional liberal":["Freelancer","Profesional independiente"],"Micro (2 a 10 pessoas)":["Micro (2 to 10 people)","Micro (2 a 10 personas)"],"Pequena (11 a 50 pessoas)":["Small (11 to 50 people)","Pequeña (11 a 50 personas)"],
  "Média (51 a 100 pessoas)":["Medium (51 to 100 people)","Mediana (51 a 100 personas)"],"Grande (mais de 100 pessoas)":["Large (more than 100 people)","Grande (más de 100 personas)"],
  "Projeto cultural ou independente":["Cultural or independent project","Proyecto cultural o independiente"],
  "Quais produtos ou serviços vocês oferecem?":["What products or services do you offer?","¿Qué productos o servicios ofrecen?"],
  "Detalhes do projeto":["Project details","Detalles del proyecto"],"O que você precisa e quais são os desafios?":["What do you need and what are the challenges?","¿Qué necesitas y cuáles son los desafíos?"],
  "Quais serviços você precisa?":["Which services do you need?","¿Qué servicios necesitas?"],"(escolha um ou mais)":["(choose one or more)","(elige uno o más)"],
  "Outro / ainda não sei":["Other / not sure yet","Otro / aún no lo sé"],"Prazo desejado":["Desired timeline","Plazo deseado"],"Sem pressa":["No rush","Sin prisa"],"Em até 1 mês":["Within 1 month","En hasta 1 mes"],
  "De 1 a 3 meses":["1 to 3 months","De 1 a 3 meses"],"É urgente":["It's urgent","Es urgente"],"Como você conheceu a STILL STUDIO?":["How did you hear about STILL STUDIO?","¿Cómo conociste STILL STUDIO?"],
  "Google":["Google","Google"],"Indicação":["Referral","Recomendación"],"LinkedIn":["LinkedIn","LinkedIn"],"Behance":["Behance","Behance"],"Outro":["Other","Otro"],
  "Descreva o projeto e os principais desafios":["Describe the project and the main challenges","Describe el proyecto y los principales desafíos"],
  "Voltar":["Back","Volver"],"Continuar":["Continue","Continuar"],"Enviar solicitação":["Send request","Enviar solicitud"],"Enviando...":["Sending...","Enviando..."],
  "Obrigado por entrar em contato.":["Thanks for getting in touch.","Gracias por ponerte en contacto."],
  "Recebemos as informações do seu projeto. A equipe da STILL STUDIO entrará em contato em breve.":["We've received your project details. The STILL STUDIO team will be in touch soon.","Recibimos la información de tu proyecto. El equipo de STILL STUDIO se pondrá en contacto pronto."],
  "Voltar para a página inicial":["Back to home page","Volver a la página de inicio"],"@seuperfil":["@yourprofile","@tuperfil"],
  "Informe seu nome completo.":["Enter your full name.","Ingresa tu nombre completo."],"Informe um e-mail válido.":["Enter a valid email.","Ingresa un correo válido."],
  "Informe um WhatsApp válido com DDD.":["Enter a valid WhatsApp number with area code.","Ingresa un WhatsApp válido con código de área."],
  "Informe o nome da empresa ou do projeto.":["Enter the company or project name.","Ingresa el nombre de la empresa o del proyecto."],"Selecione o tamanho da equipe.":["Select the team size.","Selecciona el tamaño del equipo."],
  "Conte quais produtos ou serviços vocês oferecem.":["Tell us what products or services you offer.","Cuéntanos qué productos o servicios ofrecen."],"Escolha pelo menos um serviço.":["Choose at least one service.","Elige al menos un servicio."],
  "Selecione o prazo desejado.":["Select the desired timeline.","Selecciona el plazo deseado."],"Conte como nos conheceu.":["Tell us how you heard about us.","Cuéntanos cómo nos conociste."],
  "Descreva o projeto com pelo menos 20 caracteres.":["Describe the project in at least 20 characters.","Describe el proyecto con al menos 20 caracteres."],
  "Não foi possível enviar sua solicitação agora. Verifique sua conexão e tente novamente.":["We couldn't send your request right now. Check your connection and try again.","No fue posible enviar tu solicitud ahora. Revisa tu conexión e inténtalo de nuevo."],
  /* controles */
  "Idioma":["Language","Idioma"],"Escolher idioma":["Choose language","Elegir idioma"]
 };

 /* ---------- idioma ---------- */
 var LANGS=["pt","en","es"],NAMES={pt:"Português (Brasil)",en:"English",es:"Español"},HTML={pt:"pt-BR",en:"en",es:"es"};
 var lang=get("still-lang");
 if(LANGS.indexOf(lang)<0){var nl=(navigator.language||"pt").slice(0,2).toLowerCase();lang=LANGS.indexOf(nl)>-1?nl:"pt"}
 var li={en:0,es:1}[lang];
 function T(s){if(lang==="pt"||s==null)return s;var e=DICT[s];return e&&e[li]!=null?e[li]:s}
 /* traduz um texto mantendo espaços e sinais finais (→, ↗, ., :) quando só o miolo está no dicionário */
 function TT(raw){
  var m=raw.match(/^(\s*)([\s\S]*?)(\s*)$/),core=m[2];if(!core)return raw;
  if(DICT[core])return m[1]+T(core)+m[3];
  var k=core.match(/^([\s\S]*?)(\s*[→↗×]+)$/);if(k&&DICT[k[1]])return m[1]+T(k[1])+k[2]+m[3];
  return raw}
 function translate(scope){
  if(lang==="pt")return;scope=scope||document.body;
  var w=document.createTreeWalker(scope,NodeFilter.SHOW_TEXT),n,list=[];
  while(n=w.nextNode()){if(!n.parentNode.closest("script,style,noscript"))list.push(n)}
  list.forEach(function(n){var v=TT(n.nodeValue);if(v!==n.nodeValue)n.nodeValue=v});
  [].forEach.call(scope.querySelectorAll("[aria-label],[placeholder],[title],[alt]"),function(e){["aria-label","placeholder","title","alt"].forEach(function(a){var v=e.getAttribute(a);if(v){var t=TT(v);if(t!==v)e.setAttribute(a,t)}})});
  [].forEach.call(scope.querySelectorAll("[data-ih]"),function(e){var v=T(e.getAttribute("data-ih"));if(v!==e.getAttribute("data-ih"))e.innerHTML=v});
  [].forEach.call(scope.querySelectorAll("[data-hl]"),function(e){e.setAttribute("data-hl",T("@hl"))});
 }
 root.lang=HTML[lang];
 if(lang!=="pt"){
  document.title=T(document.title);
  var md=document.querySelector('meta[name="description"]');if(md)md.content=T(md.content);
  translate(document.body);
 }
 window.STILL={lang:lang,T:T,translate:translate};

 /* ---------- botão de idioma no menu ---------- */
 var uid=0;
 [].forEach.call(document.querySelectorAll("[data-ctl]"),function(box){
  box.classList.add("ctl");var id=++uid;
  box.innerHTML='<button class="ctl-b ctl-lang" type="button" aria-haspopup="menu" aria-expanded="false" aria-controls="pl'+id+'" aria-label="'+T("Escolher idioma")+': '+NAMES[lang]+'">'+lang.toUpperCase()+'</button>';
  var pl=document.createElement("div");pl.className="pop";pl.id="pl"+id;pl.hidden=true;pl.setAttribute("role","menu");pl.setAttribute("aria-label",T("Idioma"));
  pl.innerHTML='<h2>'+T("Idioma")+'</h2>'+LANGS.map(function(l){return '<button class="it" type="button" role="menuitemradio" lang="'+HTML[l]+'" data-lang="'+l+'" aria-checked="'+(l===lang)+'"'+(l===lang?' aria-current="true"':'')+'>'+NAMES[l]+'</button>'}).join("");
  document.body.appendChild(pl);
  var bL=box.querySelector(".ctl-lang");
  function close(focus){if(pl.hidden)return;pl.hidden=true;bL.setAttribute("aria-expanded","false");if(focus)bL.focus()}
  function open(){pl.hidden=false;var r=bL.getBoundingClientRect();pl.style.top=Math.min(r.bottom+8,innerHeight-40)+"px";pl.style.left=Math.max(12,Math.min(r.right-pl.offsetWidth,innerWidth-pl.offsetWidth-12))+"px";bL.setAttribute("aria-expanded","true");var c=pl.querySelector('[aria-checked="true"]');if(c)c.focus()}
  box._close=close;
  bL.addEventListener("click",function(e){e.stopPropagation();pl.hidden?open():close(true)});
  pl.addEventListener("click",function(e){e.stopPropagation();var b=e.target.closest("[data-lang]");if(!b)return;set("still-lang",b.getAttribute("data-lang"));location.reload()});
  pl.addEventListener("keydown",function(e){
   if(e.key==="Escape"){e.preventDefault();close(true)}
   if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();var it=[].slice.call(pl.querySelectorAll(".it")),k=it.indexOf(document.activeElement);it[(k+(e.key==="ArrowDown"?1:-1)+it.length)%it.length].focus()}
   if(e.key==="Tab")close()});
 });
 function closeAll(){[].forEach.call(document.querySelectorAll("[data-ctl]"),function(b){b._close&&b._close()})}
 document.addEventListener("click",function(){closeAll()});
 addEventListener("scroll",closeAll,{passive:true});
})();
