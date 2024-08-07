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

	boxes[i].addEventListener("click", function(){ // Gera um evento que afeta todos os itens da classe box

		let el; // variavel criada para receber e repassar a situação de x ou 0

		if(jogador1 == jogador2){ // verifica a situação do valor dentro das variaveis jogadores e se forem iguais realiza a ação
			// 
			el = x; // ira colocar dentro da variavel o valor x que representa o elemento x dentro do css
		} else {
			el = o; // ira colocar o valor de circulo dentro da variavel que foi criada no html e css
			//
		}

		// logica para computar cada uma das jogadas de cada um
		if(jogador1 == jogador2){ // quando o valor dos jogadores estiver igual ele ira somar +1 para o jogador 1
			jogador1++;
		}else{ // como a unica outra situação é um valor diferente entre as variaveis ira aumentar o valor do jogador 2 em +1
			jogador2++;
		}

		let cloneEl = el.cloneNode(true); // cria uma variavel para clonar dentro dela todo o elemento el

		this.appendChild(cloneEl); // adiciona o clone do elemento dentro da caixa




	});

}