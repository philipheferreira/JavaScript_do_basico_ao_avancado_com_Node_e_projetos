// gera automaticamente o numero dentro da variavel valor, entre 0 a 10 + 1;
let valor = Math.floor(Math.random() * 10 + 1);
let valorEscrito = document.querySelector(".Escrito");

let btn = document.querySelector(".botao");

btn.addEventListener("click", function(){
	x = valorEscrito.value;
	console.log("Você digitou o numero " + x);
});
