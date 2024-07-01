// Variaveis de botões criadas para botões
let btnZero = document.querySelector(".zero");
let btnUm = document.querySelector(".um");
let btnDois = document.querySelector(".dois");
let btnTres = document.querySelector(".tres");
let btnQuatro = document.querySelector(".quatro");
let btnCinco = document.querySelector(".cinco");
let btnSeis = document.querySelector(".seis");
let btnSete = document.querySelector(".sete");
let btnOito = document.querySelector(".oito");
let btnNove = document.querySelector(".nove");

//funções criadas para ouvir eventos

let funcaoZero = () => {
	console.log("O valor é zero");
}

// criação de escutadores de evento
btnZero.addEventListener("click", funcaoZero);
