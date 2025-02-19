    // ============ SISTEMA DE MENU ============
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");

    menuIcon.addEventListener("click", function(e) {
        e.stopPropagation();
        menu.classList.toggle("active");
        menuIcon.classList.toggle("active");
    });

    document.addEventListener("click", function(e) {
        if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
            menu.classList.remove("active");
            menuIcon.classList.remove("active");
        }
    });

    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-3px)";
        });
        item.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
        });
    });

// ============ BARALHO LIVRO DAS SOMBRAS ============
const livroSombras = [
  { 
    symbol: "🌍", 
    title: "Terra", 
    meaning: `
      Na quietude do Norte, onde o Inverno repousa, a Terra revela-se como a guardiã da estabilidade. 
      Vestida nas cores verde e marrom, ela é o alicerce que nutre todas as formas de vida. Este elemento 
      convida-nos a construir com solidez, a enraizar sonhos no solo fértil da persistência. Através do quartzo 
      fumê e da hematita, encontramos a força para materializar aspirações. Plante sementes literais ou metafóricas, 
      e num ritual de conexão com a natureza, enterre um objeto que simbolize seus desejos mais profundos. 
      Visualize cada raiz a penetrar na escuridão, transformando-se em alicerce para florescer na luz.
    `
  },
  { 
    symbol: "🌬️", 
    title: "Ar", 
    meaning: `
      Na brisa renovadora do Leste, onde a Primavera desabrocha, o Ar traz o sopro do intelecto e da clareia. 
      Vestido em amarelo e branco, este elemento convida à libertação de ideias estagnadas. Através do incenso 
      de lavanda ou eucalipto, purifique espaços e mentes. Escreva pensamentos em papel e confie-os ao vento, 
      permitindo que a sabedoria do cosmos os transforme. Em meditação ao ar livre, sincronize sua respiração 
      com o ritmo do universo, encontrando respostas nas pausas entre cada inspiração.
    `
  },
  { 
    symbol: "🔥", 
    title: "Fogo", 
    meaning: `
      No calor do Sul, onde o Verão arde, o Fogo dança como a chama da transformação. Vestido de vermelho e laranja, 
      ele ensina que a destruição é gémea da criação. Acenda velas vermelhas para iluminar caminhos de coragem, 
      mas lembre-se: a paixão desmedida consome até as próprias asas. Queime hábitos antigos em rituais de purificação, 
      observando as cinzas a elevarem-se como fénix renascidas. A verdadeira força reside em dominar o calor que habita 
      em si.
    `
  },
  { 
    symbol: "💧", 
    title: "Água", 
    meaning: `
      No crepúsculo do Oeste, onde o Outono sussurra, a Água reflecte o espelho das emoções. Nas cores azul e prata, 
      ela revela que a fluidez é a arte de navegar entre as marés da alma. Use água da chuva em banhos que lavam 
      mágoas antigas, ou coloque um cálice sob a Lua para beber da intuição. Escreva em pedras as dores que carrega 
      e lance-as ao rio, deixando que a corrente as transforme em ensinamentos. A cura começa quando aceitamos mergulhar 
      nas profundezas que tememos.
    `
  },
  { 
    symbol: "🌑", 
    title: "Lua Nova", 
    meaning: `
      Sob o véu negro da Lua Nova, Hécate guia os primeiros passos de uma jornada. Este é o momento de semear 
      intenções no silêncio fértil da escuridão. Crie um altar com símbolos dos seus objetivos, como um jardim 
      invisível que aguarda a luz. Escreva um pacto consigo mesmo e guarde-o sob um quartzo branco, deixando que 
      a pedra amplifique seus votos. Toda a criação nasce do vazio que ousa sonhar.
    `
  },
  { 
    symbol: "🌕", 
    title: "Lua Cheia", 
    meaning: `
      Na plenitude da Lua Cheia, Selene derrama a luz dourada da manifestação. Celebre conquistas como oferendas 
      ao universo, mas liberte o que já não lhe serve numa dança circular sob o céu estrelado. Carregue cristais 
      como selenita ou pedra-da-lua, transformando-os em faróis de gratidão. A abundância não reside no que se acumula, 
      mas no que se partilha com o ritmo cósmico.
    `
  },
  { 
    symbol: "🌗", 
    title: "Lua Minguante", 
    meaning: `
      Na Lua Minguante, a anciã Crone ensina a sabedoria do desapego. Cores de cinza e roxo envolvem este período 
      de limpeza sagrada. Faça uma purificação doméstica com alecrim e arruda, enquanto mentaliza portas a fecharem-se 
      para o que já não lhe pertence. Escreva em papel velhos padrões e enterre-os com sal grosso, simbolizando o regresso 
      ao essencial. O verdadeiro poder está em saber quando soltar.
    `
  },
  { 
    symbol: "⭐", 
    title: "Pentagrama", 
    meaning: `
      O Pentagrama, estrela de cinco pontas, é a dança harmoniosa entre os elementos e o espírito. Desenhe-o 
      em sua porta com óleo sagrado, transformando-o num escudo contra energias caóticas. Visualize sua luz 
      dourada a envolver seu corpo, lembrando que a proteção nasce do equilíbrio interior. Cada linha é um 
      compromisso: honrar a Terra, o Ar, o Fogo, a Água e o Divino que habita em si.
    `
  },
  { 
    symbol: "🕯️", 
    title: "Vela", 
    meaning: `
      A chama de uma vela é o coração palpável do fogo ritualístico. Consagre-a com óleos de mirra ou sândalo, 
      transformando-a numa ponte entre mundos. Acenda uma vela azul para meditar, observando como a chama treme 
      mas não se apaga — metáfora da resiliência humana. Cada lágrima de cera é uma promessa ao universo, 
      um testemunho silencioso de que até na escuridão, a luz persiste.
    `
  },
  { 
    symbol: "⚱️", 
    title: "Caldeirão", 
    meaning: `
      O Caldeirão de Cerridwen é o útero cósmico onde os opostos se fundem. Encha-o com água e pétalas para 
      ver além das ilusões, ou queime ervas em seu interior, liberando fumos que carregam preces ancestrais. 
      Nele, desejos escritos transformam-se em cinzas que fertilizam novos ciclos. Lembre-se: a magia não está 
      no recipiente, mas na coragem de mexer o conteúdo com intenção pura.
    `
  },
  { 
    symbol: "🔮", 
    title: "Bola de Cristal", 
    meaning: `
      A Bola de Cristal não é um oráculo passivo, mas um convite ao diálogo com a alma. Limpe-a com água salgada 
      e Lua Nova, preparando-a para reflectir verdades internas. Ao fixar seu olhar na esfera sob luz de velas, 
      pergunte não pelo futuro, mas pelo que sua essência precisa compreender agora. As respostas surgem como névoas 
      que se dissipam para revelar paisagens interiores.
    `
  },
  { 
    symbol: "🌿", 
    title: "Ervas Sagradas", 
    meaning: `
      As Ervas são os alfabetos verdes da Terra. Cultive sálvia para purificar, lavanda para acalmar, manjericão 
      para atrair prosperidade. Num saquinho de linho, crie amuletos que carreguem o aroma da resiliência natural. 
      Cada folha seca é uma lição: mesmo longe do caule, a essência permanece. A verdadeira magia reside em honrar 
      a vida que pulsa em cada raiz.
    `
  },
  { 
    symbol: "🛡️", 
    title: "Athame", 
    meaning: `
      O Athame, espada ritual de ferro, é a vontade focada que corta ilusões. Consagre-o com os quatro elementos 
      antes de traçar círculos sagrados no ar. Use-o não para ferir, mas para delimitar espaços onde apenas a verdade 
      ressoa. Ao brandi-lo, declare: "Este lugar é santificado pela minha intenção". A maior proteção é a clareza 
      de propósito.
    `
  },
  { 
    symbol: "📜", 
    title: "Grimório", 
    meaning: `
      O Grimório é o espelho da alma em palavras. Registre sonhos com tinta de carvão, desenhe símbolos que só 
      seu coração decifra, cole folhas caídas como marcadores do tempo. No Equinócio, queime páginas que já não 
      ressoam, liberando espaço para novos capítulos. Este livro não é sobre perfeição, mas sobre a coragem de 
      escrever a própria mitologia.
    `
  },
  { 
    symbol: "🌀", 
    title: "Espiral", 
    meaning: `
      A Espiral é o movimento eterno da Deusa Tríplice. Desenhe-a em seu altar ao enfrentar mudanças, lembrando 
      que crescimento não é linear. Caminhe num labirinto em meditação, percebendo que cada volta aproxima-o do 
      centro sagrado: o seu eu autêntico. A vida não é uma linha reta, mas uma dança cósmica que expande consciências.
    `
  }
];

// ============ FUNÇÃO PRINCIPAL ============
function sortearCartas() {
    const opcao = document.getElementById("leitura-opcao").value;
    const quantidade = parseInt(opcao, 10);
    const selecionadas = livroSombras.sort(() => 0.5 - Math.random()).slice(0, quantidade);
    
    const container = document.getElementById("runas-container");
    const resultContainer = document.getElementById("runas-meanings");
    
    container.innerHTML = "";
    resultContainer.innerHTML = "";

    selecionadas.forEach(carta => {
        container.innerHTML += `
            <div class="runa">
                <div class="runa-title">${carta.symbol}</div>
            </div>
        `;
        resultContainer.innerHTML += `
            <h3>${carta.title}</h3>
            <p>${carta.meaning}</p>
        `;
    });
}