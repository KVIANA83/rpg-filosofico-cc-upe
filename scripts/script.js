const perguntas = [
  // 1. O sentido da filosofia da educação
  {
    tema: "Filosofia da Educação",
    pergunta: "Qual é o principal objetivo da Filosofia da Educação?",
    respostas: [
      "Criar regras rígidas para o ensino",
      "Refletir criticamente sobre os processos educativos",
      "Ensinar a decorar conteúdos escolares"
    ],
    correta: 1
  },
  {
    tema: "Filosofia da Educação",
    pergunta: "A Filosofia da Educação ajuda os professores a:",
    respostas: [
      "Melhorarem apenas as técnicas de ensino",
      "Reproduzirem o currículo escolar",
      "Pensarem sobre os fins e os meios da educação"
    ],
    correta: 2
  },
  {
    tema: "Filosofia da Educação",
    pergunta: "A reflexão filosófica sobre a educação busca:",
    respostas: [
      "Impor padrões culturais",
      "Desenvolver senso crítico sobre a prática educativa",
      "Eliminar disciplinas das escolas"
    ],
    correta: 1
  },

  // 2. A origem do pensamento ocidental e a preocupação com o conhecimento
  {
    tema: "Origem do Pensamento Ocidental",
    pergunta: "A filosofia ocidental teve origem na:",
    respostas: [
      "Grécia Antiga",
      "Roma Antiga",
      "Índia Antiga"
    ],
    correta: 0
  },
  {
    tema: "Origem do Pensamento Ocidental",
    pergunta: "Os primeiros filósofos buscavam explicar o mundo por meio da:",
    respostas: [
      "Mitologia e religião",
      "Razão e observação",
      "Tradição oral"
    ],
    correta: 1
  },
  {
    tema: "Origem do Pensamento Ocidental",
    pergunta: "O que caracteriza o pensamento filosófico?",
    respostas: [
      "Aceitação de verdades absolutas",
      "Busca por explicações racionais",
      "Repetição de mitos antigos"
    ],
    correta: 1
  },

  // 3. A contribuição de Sócrates e Platão para a Educação
  {
    tema: "Sócrates e Platão",
    pergunta: "Sócrates ficou conhecido por qual método?",
    respostas: [
      "Dialético ou maiêutico",
      "Retórico ou decorativo",
      "Empírico ou científico"
    ],
    correta: 0
  },
  {
    tema: "Sócrates e Platão",
    pergunta: "A principal proposta educativa de Platão era baseada em:",
    respostas: [
      "Educação sensorial e prática",
      "Educação física e artística",
      "Educação da alma e razão"
    ],
    correta: 2
  },
  {
    tema: "Sócrates e Platão",
    pergunta: "O que Platão propunha como ideal para os governantes?",
    respostas: [
      "Que fossem guerreiros fortes",
      "Que fossem ricos e influentes",
      "Que fossem filósofos sábios"
    ],
    correta: 2
  },

  // 4. A questão do conhecimento para Aristóteles
  {
    tema: "Aristóteles",
    pergunta: "Para Aristóteles, o conhecimento verdadeiro vem da:",
    respostas: [
      "Imaginação e sonhos",
      "Experiência e observação",
      "Fé e tradição"
    ],
    correta: 1
  },
  {
    tema: "Aristóteles",
    pergunta: "Qual é a principal diferença entre Platão e Aristóteles?",
    respostas: [
      "Platão valorizava o mundo sensível, Aristóteles o mundo das ideias",
      "Aristóteles valorizava a razão prática, Platão o mundo ideal",
      "Ambos rejeitavam a razão"
    ],
    correta: 1
  },
  {
    tema: "Aristóteles",
    pergunta: "Aristóteles dividia os tipos de conhecimento em:",
    respostas: [
      "Teórico, prático e produtivo",
      "Religioso, moral e ético",
      "Natural, simbólico e abstrato"
    ],
    correta: 0
  },

  // 5. Questões éticas, educação e formação de professores
  {
    tema: "Ética e Formação de Professores",
    pergunta: "A ética na educação envolve:",
    respostas: [
      "Transmitir valores universais e respeitar o outro",
      "Impor ideias pessoais aos alunos",
      "Evitar qualquer discussão de valores"
    ],
    correta: 0
  },
  {
    tema: "Ética e Formação de Professores",
    pergunta: "A formação ética dos professores é importante para:",
    respostas: [
      "Promover reflexão e responsabilidade na prática docente",
      "Ensinar apenas conteúdos técnicos",
      "Evitar o envolvimento emocional com os alunos"
    ],
    correta: 0
  },
  {
    tema: "Ética e Formação de Professores",
    pergunta: "Qual é o papel do professor como agente ético?",
    respostas: [
      "Garantir que os alunos obedeçam sem questionar",
      "Promover o pensamento crítico e o diálogo",
      "Seguir ordens da coordenação escolar sem pensar"
    ],
    correta: 1
  }
];

let indiceAtual = 0;
let pontuacao = 0;

const tituloPergunta = document.getElementById("question-title");
const listaRespostas = document.getElementById("answer-list");
const botaoProxima = document.getElementById("next-btn");
const resultado = document.getElementById("result");
const placar = document.getElementById("score");

function mostrarPergunta() {
  const perguntaAtual = perguntas[indiceAtual];
  tituloPergunta.innerText = `(${perguntaAtual.tema}) ${perguntaAtual.pergunta}`;
  listaRespostas.innerHTML = "";

  perguntaAtual.respostas.forEach((resposta, index) => {
    const li = document.createElement("li");
    li.innerText = resposta;
    li.addEventListener("click", () => selecionarResposta(index));
    listaRespostas.appendChild(li);
  });
}

function selecionarResposta(respostaSelecionada) {
  const correta = perguntas[indiceAtual].correta;
  if (respostaSelecionada === correta) {
    pontuacao++;
    alert("Resposta correta!");
  } else {
    alert("Resposta incorreta!");
  }
  botaoProxima.style.display = "inline";
}

botaoProxima.addEventListener("click", () => {
  indiceAtual++;
  if (indiceAtual < perguntas.length) {
    mostrarPergunta();
    botaoProxima.style.display = "none";
  } else {
    document.getElementById("quiz-container").classList.add("hidden");
    resultado.classList.remove("hidden");
    placar.innerText = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
  }
});

// Início do jogo
mostrarPergunta();
botaoProxima.style.display = "none";


      
