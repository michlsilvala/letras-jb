const mensagem = document.getElementById("mensagem");
const navegacao = document.querySelector(".container5");

const respostaCorreta =
    Number(document.querySelector(".container4").dataset.correta);

const botoes = document.querySelectorAll(".container4 button");

function mostrarNavegacao() {
    navegacao.style.opacity = "1";
    navegacao.style.transform = "translateY(0)";
}

function bloquearBotoes() {
    botoes.forEach(botao => {
        botao.disabled = true;
        botao.style.cursor = "default";
    });
}

function responder(escolha) {

    bloquearBotoes();

    const botaoEscolhido =
        document.getElementById(`music${escolha}`);

    const botaoCorreto =
        document.getElementById(`music${respostaCorreta}`);

    if (escolha === respostaCorreta) {

        botaoCorreto.style.backgroundColor = "green";

        mensagem.textContent = "🎉 Acertou!";
        mensagem.classList.remove("errouAnimacao");
        mensagem.classList.add("acertouAnimacao");

        let acertos = Number(localStorage.getItem("acertos")) || 0;
        localStorage.setItem("acertos", acertos + 1);

    } else {

        botaoEscolhido.style.backgroundColor = "red";
        botaoCorreto.style.backgroundColor = "green";

        mensagem.textContent = "❌ Errou!";
        mensagem.classList.remove("acertouAnimacao");
        mensagem.classList.add("errouAnimacao");

        let erros = Number(localStorage.getItem("erros")) || 0;
        localStorage.setItem("erros", erros + 1);
    }

    botaoCorreto.classList.add("pulsar");

    setTimeout(() => {
        botaoCorreto.classList.remove("pulsar");
    }, 800);

    setTimeout(() => {
        mostrarNavegacao();
    }, 700);
}