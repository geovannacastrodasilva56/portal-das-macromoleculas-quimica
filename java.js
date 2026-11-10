const formularioQuiz = document.getElementById("quiz");

if (formularioQuiz) {
    formularioQuiz.onsubmit = function(event) {
        event.preventDefault();

    let respostas = ["b", "a", "a", "c", "a"];
    let pontos = 0;

    for (let i = 1; i <= 5; i++) {
        let resposta = document.querySelector(
            'input[name="p' + i + '"]:checked'
        );

        if (resposta.value === respostas[i - 1]) {
            pontos++;
        }
    }

    document.getElementById("resultado").innerHTML =
        "Você acertou " + pontos + " de 5 questões!";
    }
};


const botaoTema = document.getElementById("btn-tema");
const pagina = document.documentElement;

const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {
    pagina.setAttribute("data-tema", "escuro");
}

if (botaoTema) {
    botaoTema.innerHTML = `
        <span class="icone">☀️</span>
        <span class="icone">🌙</span>
        <span class="bolinha"></span>
    `;

    botaoTema.addEventListener("click", alternarTema);
}

function alternarTema() {
    const temaAtual = pagina.getAttribute("data-tema");

    if (temaAtual === "escuro") {
        pagina.removeAttribute("data-tema");
        localStorage.setItem("tema", "claro");
    } else {
        pagina.setAttribute("data-tema", "escuro");
        localStorage.setItem("tema", "escuro");
    }
}


const botoes = document.querySelectorAll(".botao-texto");

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        const texto = botao.previousElementSibling;

        texto.classList.toggle("expandido");

        if (texto.classList.contains("expandido")) {
            botao.textContent = "Mostrar menos";
        } else {
            botao.textContent = "Mostrar mais";
        }
    });
});


const pesquisa = document.getElementById("pesquisa");
const filtros = document.querySelectorAll(".filtro");
const cards = document.querySelectorAll(".card");

let categoriaAtual = "todos";

function filtrarCards() {
    const texto = pesquisa.value.toLowerCase();

    cards.forEach(card => {
        const categoria = card.id;
        const conteudo = card.textContent.toLowerCase();

        const correspondeCategoria =
            categoriaAtual === "todos" || categoria === categoriaAtual;

        const correspondeBusca = conteudo.includes(texto);

        card.style.display =
            correspondeCategoria && correspondeBusca ? "block" : "none";
    });
}

filtros.forEach(botao => {
    botao.addEventListener("click", function() {
        categoriaAtual = this.dataset.categoria;
        filtrarCards();
    });
});

if (pesquisa) {
    pesquisa.addEventListener("input", filtrarCards);
}

const botaoMenu = document.getElementById("menu-hamburguer");
const menu = document.getElementById("menu");

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", function() {
        menu.classList.toggle("ativo");
    });
}


const modal = document.querySelector(".modal");
const abrirModal = document.querySelector(".abrir-modal");
const fecharModal = document.querySelector(".fechar-modal");

if (modal && abrirModal && fecharModal) {
    abrirModal.addEventListener("click", function() {
        modal.style.display = "flex";
    });

    fecharModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

console.log("JavaScript carregado!");


const botaoDescobrir = document.getElementById("descobrir");
const resultadoDescoberta = document.getElementById("resultado-descoberta");

if (botaoDescobrir && resultadoDescoberta) {
    botaoDescobrir.addEventListener("click", function() {

        const curiosidades = [
            "Carboidratos: são uma das principais fontes de energia do organismo.",
            "Lipídios: participam da formação das membranas celulares.",
            "Proteínas: desempenham funções importantes na construção e manutenção dos tecidos.",
            "Ácidos nucleicos: armazenam e transmitem informações genéticas.",
            "Polímeros: são moléculas formadas pela união de unidades menores chamadas monômeros."
        ];

        const numero = Math.floor(Math.random() * curiosidades.length);

        resultadoDescoberta.textContent = curiosidades[numero];
    });
}