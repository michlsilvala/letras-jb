const acertos = localStorage.getItem("acertos") || 0;
const erros = localStorage.getItem("erros") || 0;

document.getElementById("acertos").textContent = acertos;
document.getElementById("erros").textContent = erros;

const frase = document.querySelector(".frase-final");

if (acertos >= 9) {
    frase.textContent = "🏆 Você é praticamente um especialista em Justin Bieber!";
}
else if (acertos >= 7) {
    frase.textContent = "🎵 Você conhece muito bem as músicas dele!";
}
else if (acertos >= 5) {
    frase.textContent = "👍 Você mandou bem!";
}
else {
    frase.textContent = "😅 Hora de ouvir mais Justin Bieber!";
}