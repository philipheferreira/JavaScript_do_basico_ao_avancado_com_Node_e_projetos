// Variaveis criadas para receber os apontamentos no html
let mostrador = document.querySelector(".visor")
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
	mostrador.innerHTML = "0";
	console.log("O valor é zero");
}

let funcaoUm = () => {
	mostrador.innerHTML = 1;
	console.log("O valor é um");
}

let funcaoDois = () => {
	mostrador.innerHTML = 2;
	console.log("O valor é dois");
}

let funcaoTres = () => { 
	mostrador.innerHTML = 3;
	console.log("O valor é três");
}

let funcaoQuatro = () => {
	mostrador.innerHTML = 4;
	console.log("O valor é quatro");
}

let funcaoCinco = () => {
	mostrador.innerHTML = 5;
	console.log("O valor é cinco");
}

let funcaoSeis = () => {
	mostrador.innerHTML = 6;
	console.log("O valor é seis");
}

let funcaoSete = () => {
	mostrador.innerHTML = 7;
	console.log("O valor é sete");
}

let funcaoOito = () => {
	mostrador.innerHTML = 8;
	console.log("O valor é oito");
}

let funcaoNove = () => {
	mostrador.innerHTML = 9;
	console.log("O valor é nove");
}

// criação de escutadores de evento
btnZero.addEventListener("click", funcaoZero);

btnUm.addEventListener("click", funcaoUm);

btnDois.addEventListener("click", funcaoDois);

btnTres.addEventListener("click", funcaoTres);

btnQuatro.addEventListener("click", funcaoQuatro);

btnCinco.addEventListener("click", funcaoCinco);

btnSeis.addEventListener("click", funcaoSeis);

btnSete.addEventListener("click", funcaoSete);

btnOito.addEventListener("click", funcaoOito);

btnNove.addEventListener("click", funcaoNove);