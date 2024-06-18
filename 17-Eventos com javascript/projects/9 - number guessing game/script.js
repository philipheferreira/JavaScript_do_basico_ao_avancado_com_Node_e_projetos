// gera automaticamente o numero dentro da variavel valor, entre 0 a 10 + 1;
let valor = Math.floor(Math.random() * 10 + 1);

let valorEscrito = document.querySelector(".Escrito");
let btn = document.querySelector(".botao");

btn.addEventListener("click", function(){
	let x = valorEscrito.value;

	if(x == valor){
		alert("PARABÉNS, VOCÊ ACERTO!!!!\nO numero era "+ valor);
	}else if (x > valor) {
		alert("Errou, tente um numero menor");
	}else {
		alert("Errou, tente um numero maior");
	}
});
