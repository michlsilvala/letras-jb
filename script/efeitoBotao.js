const mensagem = document.getElementById("mensagem");

function acertou() {

    music3.style.backgroundColor = "green";

    mensagem.textContent = "🎉 Acertou!";
    mensagem.classList.remove("errouAnimacao");
    mensagem.classList.add("acertouAnimacao");

    music3.classList.add("pulsar");

    setTimeout(() => {
        music3.classList.remove("pulsar");
    }, 800);
}

function errou() {

    music1.style.backgroundColor = "red";
    music2.style.backgroundColor = "red";
    music3.style.backgroundColor = "green";
    music4.style.backgroundColor = "red";

    mensagem.textContent = "❌ Errou!";
    mensagem.classList.remove("acertouAnimacao");
    mensagem.classList.add("errouAnimacao");

    music3.classList.add("pulsar");

    setTimeout(() => {
        music3.classList.remove("pulsar");
    }, 800);
}