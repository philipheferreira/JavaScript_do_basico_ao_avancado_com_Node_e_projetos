
//variaveis criadas
let btnNascimento = document.querySelector(".botaoNascimento");
let valorNascimento = document.querySelector(".dataNascimento");
let recebeDataDeNascimento = document.querySelector(".dataDeNascimento");
let dataNascimento = 0;

//funcoes das operacoes

let pegarData = () => {
	dataNascimento = valorNascimento.value;
	console.log("A data nascimento é: " + dataNascimento);
	recebeDataDeNascimento.innerHTML = valorNascimento.value
}


//Eventos das operações

btnNascimento.addEventListener("click", pegarData);


