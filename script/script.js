const paragrafos = document.querySelectorAll(".container3 p");
const titulo = document.querySelector(".container3 h3");
const containerBotoes = document.querySelector(".container4");

async function escrever(elemento, texto, velocidade = 40) {
    elemento.textContent = "";

    for (let i = 0; i < texto.length; i++) {
        elemento.textContent += texto[i];
        await new Promise(resolve => setTimeout(resolve, velocidade));
    }
}

async function iniciarAnimacao() {

    const textos = [];

    paragrafos.forEach(p => {
        textos.push(p.textContent);
        p.textContent = "";
    });

    for (let i = 0; i < paragrafos.length; i++) {
        await escrever(paragrafos[i], textos[i], 40);
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Faz o h3 aparecer após a letra terminar
    titulo.style.opacity = "1";

    // Espera um pouco após aparecer o título
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mostra os botões suavemente
    containerBotoes.style.opacity = "1";
}

iniciarAnimacao();