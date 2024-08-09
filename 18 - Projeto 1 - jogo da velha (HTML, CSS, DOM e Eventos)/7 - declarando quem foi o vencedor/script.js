let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let botoes = document.querySelectorAll(".container-botao button");
let mensagemContainer = document.querySelector(".mensagem")
let mensagemTexto = document.querySelector(".mensagem p");
let segundoJogador;

// Contador de jogadas
let jogador1 = 0;
let jogador2 = 0;



// adicionando o evento de click aos boxes

for(let i = 0; i < boxes.length; i++){

	boxes[i].addEventListener("click", function(){ // Gera um evento que afeta todos os itens da classe box

	let el = checarElemento(jogador1, jogador2);

	if(this.childNodes.length == 0){ // verifica se o box tem preenchido algum valor, se não tiver nada dentro adiciona X ou O

		let cloneEl = el.cloneNode(true); // cria uma variavel para clonar dentro dela todo o elemento el

		this.appendChild(cloneEl); // adiciona o clone do elemento dentro da caixa

		// logica para computar cada uma das jogadas de cada um
		if(jogador1 == jogador2){ // quando o valor dos jogadores estiver igual ele ira somar +1 para o jogador 1
			jogador1++;
		}else{ // como a unica outra situação é um valor diferente entre as variaveis ira aumentar o valor do jogador 2 em +1
			jogador2++;
		}

		//Checar quem venceu
		checarVencedor();


	}


	});

}

function checarElemento(jogador1, jogador2){

		let el; // variavel criada para receber e repassar a situação de x ou 0

		if(jogador1 == jogador2){ // verifica a situação do valor dentro das variaveis jogadores e se forem iguais realiza a ação
			// 
			el = x; // ira colocar dentro da variavel o valor x que representa o elemento x dentro do css
		} else {
			el = o; // ira colocar o valor de circulo dentro da variavel que foi criada no html e css
			//
		}
		return el;
}

function checarVencedor(){
	let b1 = document.querySelector(".block-1");
	let b2 = document.querySelector(".block-2");
	let b3 = document.querySelector(".block-3");
	let b4 = document.querySelector(".block-4");
	let b5 = document.querySelector(".block-5");
	let b6 = document.querySelector(".block-6");
	let b7 = document.querySelector(".block-7");
	let b8 = document.querySelector(".block-8");
	let b9 = document.querySelector(".block-9");


	// VITORIAS NA HORIZONTAL
	if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){

		let b1Filho = b1.childNodes[0].className; // gera filhos para ler os valores dentro das classes
		let b2Filho = b2.childNodes[0].className;
		let b3Filho = b3.childNodes[0].className;

		if(b1Filho == "x" && b2Filho == "x" && b3Filho == "x"){

			declararVencedor("jogador1");

		}else 
		if(b1Filho == "o" && b2Filho == "o" && b3Filho == "o"){
			declararVencedor("jogador2");
		}
	}

	if(b4.childNodes.length > 0 &&  b5.childNodes.length > 0 &&  b6.childNodes.length > 0){

		let b4Filho = b4.childNodes[0].className;
		let b5Filho = b5.childNodes[0].className;
		let b6Filho = b6.childNodes[0].className;

		if(b4Filho == "x" && b5Filho == "x" && b6Filho == "x"){
			declararVencedor("jogador1");
		}else 
		if(b4Filho == "o" && b5Filho == "o" && b6Filho == "o"){
			declararVencedor("jogador2");
		}
	}

	if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length){

		let b7Filho = b7.childNodes[0].className;
		let b8Filho = b8.childNodes[0].className;
		let b9Filho = b9.childNodes[0].className;

		if(b7Filho == "x" && b8Filho == "x" && b9Filho == "x"){
			declararVencedor("jogador1");
		}else
		if(b7Filho == "o" && b8Filho == "o" && b9Filho == "o"){
			declararVencedor("jogador2");
		}
	}

	//VITORIAS NA VERTICAL
	if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length){

		let b1Filho = b1.childNodes[0].className;
		let b4Filho = b4.childNodes[0].className;
		let b7Filho = b7.childNodes[0].className;

		if(b1Filho == "x" && b4Filho == "x" && b7Filho == "x"){
			declararVencedor("jogador1");
		}else
		if(b1Filho == "o" && b4Filho == "o" && b7Filho == "o"){
			declararVencedor("jogador2");
		}
	}

	if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length){

		let b2Filho = b2.childNodes[0].className;
		let b5Filho = b5.childNodes[0].className;
		let b8Filho = b8.childNodes[0].className;

		if(b2Filho == "x" && b5Filho == "x" && b8Filho == "x"){
			declararVencedor("jogador1");
		}else
		if(b2Filho == "o" && b5Filho == "o" && b8Filho == "o"){
			declararVencedor("jogador2");
		}
	}

	if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length){

		let b3Filho = b3.childNodes[0].className;
		let b6Filho = b6.childNodes[0].className;
		let b9Filho = b9.childNodes[0].className

		if(b3Filho == "x" && b6Filho == "x" && b9Filho == "x"){
			declararVencedor("jogador1");
		}else
		if(b3Filho == "o" && b6Filho == "o" && b9Filho == "o"){
			declararVencedor("jogador2");
		}
	}
	// VITORIAS NA DIAGONAL

	if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length){

		let b1Filho = b1.childNodes[0].className;
		let b5Filho = b5.childNodes[0].className;
		let b9Filho = b9.childNodes[0].className;

		if(b1Filho == "x" && b5Filho == "x" && b9Filho == "x"){
			declararVencedor("jogador1");
		}else
		if(b1Filho == "o" && b5Filho == "o" && b9Filho == "o"){
			declararVencedor("jogador2");
		}
	}

	if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){

		let b3Filho = b3.childNodes[0].className;
		let b5Filho = b5.childNodes[0].className;
		let b7Filho = b7.childNodes[0].className;

		if(b3Filho == "x" && b5Filho == "x" && b7Filho == "x"){
			declararVencedor("jogador1");
		}else 
		if(b3Filho == "o" && b5Filho == "o" && b7Filho == "o"){
			declararVencedor("jogador2");
		}
	}

	// Quando Ninguém ganha
	let contador = 0;

	for(let i = 0; i < boxes.length; i++){
		if(boxes[i].childNodes[0] != undefined){
			contador++;
		}
	}

	if(contador == 9){
		declararVencedor("empate");
	}

}


// função que limpa o jogo, declara o vencedor e atualiza o placar
function declararVencedor(vencedor){

	let pontoJogador1 = document.querySelector(".placar-1");
	let pontoJogador2 = document.querySelector(".placar-2");
	let mensagem = "";

	if(vencedor == "jogador1"){
		pontoJogador1.textContent = parseInt(pontoJogador1.textContent) + 1;
		mensagem = "O Jogador 1 venceu!";
	}else 
	if(vencedor == "jogador2"){
		pontoJogador2.textContent = parseInt(pontoJogador2.textContent) + 1;
		mensagem = "O Jogador 2 venceu!";
	}else{
		mensagem = "Deu Velha!";
	}

	// Exibe mensagem
	mensagemTexto.innerHTML = mensagem;
	mensagemContainer.classList.remove("hide");

	// esconde mensagem depois de 3 segundos

	setTimeout(function(){
		mensagemContainer.classList.add("hide");
	}, 3000);

	// zera as jogadas;
	jogador1 = 0
	jogador2 = 0

	// remove todos os x e as bolinhas no jogo da velha

	let boxesToRemove = document.querySelectorAll(".box div");

	setTimeout(function(){
		for(let i = 0; i < boxesToRemove.length; i++){
		boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
	}
	},3000);
}