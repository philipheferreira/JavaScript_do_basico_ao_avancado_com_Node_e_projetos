let btn = document.querySelector(".botao");
let valorNome = document.querySelector(".nomeInput");
let nome = "";
btn.addEventListener("click", function(){
	nome = valorNome.value;
	alert("Ola, seu nome é " + nome);
	valorNome.value = ""; // serve para zerar novamentee o input
});