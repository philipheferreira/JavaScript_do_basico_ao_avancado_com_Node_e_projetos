let btn1 = document.querySelector(".botao1");
let escrita = document.querySelector(".valorVariavel");
let mostrar = document.querySelector(".mostrador");
let x = 0;

btn1.addEventListener("click", function(){
	x = escrita.value;
	mostrar.innerHTML = mostrar.innerHTML + x;

});