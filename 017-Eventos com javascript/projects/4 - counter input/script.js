let btn1 = document.querySelector(".botao1");
let escrita = document.querySelector(".valorVariavel");
let mostrar = document.querySelector(".mostrador");
let x = 0; // precisar começar com um valor zerado para poder ser contabilizado como number;
mostrar.innerHTML = 0; // precisa ter um numero inicializado com 0 se não quando for conversert com parseInt na soma ira dar NaN
btn1.addEventListener("click", function(){
	x = escrita.value;
	mostrar.innerHTML = parseInt(mostrar.innerHTML) + parseInt(x); // parseInt faz a conversão de numeros

});