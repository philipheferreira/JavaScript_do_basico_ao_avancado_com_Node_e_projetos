let variavel = document.querySelector(".meuRange");
let btn = document.querySelector(".botao");
let mostrador = document.querySelector(".visor");

mostrador.innerHTML = 0;
variavel.value = 0;

btn.addEventListener("click", function(){
	x = variavel.value;
	mostrador.innerHTML = x;
});

