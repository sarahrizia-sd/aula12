// 1. pega o botão e o parágrafo
const botao = document.querySelector("#botao");
const contador = document.querySelector("#contador");

// 2. uma variável para contar os cliques
let cliques = 0;

function contarClique() {
  cliques++;
  console.log(cliques);
}

// 3. fica de olho no botão: QUANDO alguém clicar, roda esta função
botao.addEventListener("mouseover", function () {
  cliques = cliques + 1;
  contador.textContent = "Você clicou " + cliques + " vez(es).";
});

// repare: a função não roda agora, só quando o clique acontece

const form = document.querySelector("#formAluno");
const mensagem = document.querySelector("#mensagem");

const turma = [
  { nome: "Ana", nota: 9 },
  { nome: "Bruno", nota: 8 },
  { nome: "Carla", nota: 7.5 }
];

function mostrarTurma() {
  console.log("Turma atual:");
  turma.forEach((aluno) => {
    console.log(`${aluno.nome}: ${aluno.nota}`);
  });
}

mostrarTurma();

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = form.nome.value.trim();
  const nota = form.nota.value.trim();

  if (!nome || !nota) {
    mensagem.textContent = "Preencha nome e nota antes de salvar.";
    return;
  }

  mensagem.textContent = `Recebi: ${nome} - ${nota}`;
  console.log("Recebi:", nome, nota);
});
