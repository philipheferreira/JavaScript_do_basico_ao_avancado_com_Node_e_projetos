let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let botoes = document.querySelectorAll(".container-botao button");
//let messagemContainer = document.querySelector("")
let mensagemTexto = document.querySelector(".mensagem p");
let segundoJogador;

// Contador de jogadas
let jogador1 = 0;
let jogador2 = 0;

// adicionando o evento de click aos boxes

for(let i = 0; i < boxes.length; i++){

	boxes[i].addEventListener("click", function(){

		let el;

		if(jogador1 == jogador2){
			el = x;
		} else {
			el = o;
		}

		let cloneEl = el.cloneNode(true);

		this.appendChild(cloneEl);
	});

}