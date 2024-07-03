//Variaveis do programa
let btn1 = document.querySelector(".botao1");
let btn2 = document.querySelector(".botao2");
let msg = document.querySelector(".mensagem");
let mostrar = document.querySelector(".mostrador");

//eventos

btn1.addEventListener("click", Amostra);
	
btn2.addEventListener("click", Esconde);

//funções

function Amostra(){
	msg.innerHTML = "Agora você pode ver a mensagem secreta";
	mostrar.innerHTML = "Eu sou a mensagem secreta";
}

function Esconde(){
	msg.innerHTML = "Agora a mensagem secreta está escondida";
	mostrar.innerHTML = "";
}