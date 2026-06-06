const music1 = document.getElementById("music1");
const music2 = document.getElementById("music2");
const music3 = document.getElementById("music3");
const music4 = document.getElementById("music4");

const mensagem = document.getElementById("mensagem");
const navegacao = document.querySelector(".container5");

function mostrarNavegacao() {
    navegacao.style.opacity = "1";
    navegacao.style.transform = "translateY(0)";
}

function acertou() {

    music3.style.backgroundColor = "green";

    mensagem.textContent = "🎉 Acertou!";
    mensagem.classList.remove("errouAnimacao");
    mensagem.classList.add("acertouAnimacao");

    music3.classList.add("pulsar");

    setTimeout(() => {
        music3.classList.remove("pulsar");
    }, 800);

    setTimeout(() => {
        mostrarNavegacao();
    }, 700);
}

function errou(escolha) {

    if (escolha === 1) {
        music1.style.backgroundColor = "red";
    }

    if (escolha === 2) {
        music2.style.backgroundColor = "red";
    }

    if (escolha === 4) {
        music4.style.backgroundColor = "red";
    }

    music3.style.backgroundColor = "green";

    mensagem.textContent = "❌ Errou!";
    mensagem.classList.remove("acertouAnimacao");
    mensagem.classList.add("errouAnimacao");

    music3.classList.add("pulsar");

    setTimeout(() => {
        music3.classList.remove("pulsar");
    }, 800);

    setTimeout(() => {
        mostrarNavegacao();
    }, 700);
}