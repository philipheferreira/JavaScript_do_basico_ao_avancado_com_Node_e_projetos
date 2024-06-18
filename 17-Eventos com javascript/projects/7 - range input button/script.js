let variavel = document.querySelector(".meuRange");
let btn = document.querySelector(".botao");
let mostrador = document.querySelector(".visor");


btn.addEventListener("click", function(){
	x = variavel.value;
	mostrador.innerHTML = x;
});

