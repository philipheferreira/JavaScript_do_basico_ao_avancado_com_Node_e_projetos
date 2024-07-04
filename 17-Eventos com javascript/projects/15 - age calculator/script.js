
//variaveis criadas
let btnNascimento = document.querySelector(".botaoNascimento");
let valorNascimento = document.querySelector(".dataNascimento");
let idade = document.querySelector(".receberIdade");
let recebeDataDeNascimento = document.querySelector(".dataDeNascimento");
let viveuEmAnos = document.querySelector(".viveuEmAnos");
let viveuEmMeses = document.querySelector(".viveuEmMeses")
let viveuEmSemanas = document.querySelector(".viveuEmSemanas");
let viveuEmDias = document.querySelector(".viveuEmDias");
let viveuEmHoras = document.querySelector(".viveuEmHoras");
let viveuEmMinutos = document.querySelector(".viveuEmMinutos");
let viveuEmSegundos = document.querySelector(".viveuEmSegundos");
let diasFaltando = document.querySelector(".diasFaltandoAniversario");
let dataNascimento = 0;

//Variaveis criadas para ajudar no calculo das operações
const hoje = new Date();
const segundos = 1000;
const minutos = 60;
const horas = 24;
const semana = 7;

//Criação de uma variavel para estabelecer um limite de data recebido no input
let dataMaxima = hoje.toISOString().substring(0, 10); // recebe valor para limitar o periodo maximo permitido
valorNascimento.setAttribute("max", dataMaxima);; // jogar o atributo maximo no input de data


//funcoes das operacoes

let pegarData = () => {

	let umDia = segundos * minutos * minutos * horas;
	let umaHora = segundos * minutos * minutos;
	let umMinutos = segundos * minutos;

	console.log("um dia: " + umDia + "\nUma hora: " + umaHora + "\nUm minutos: " + umMinutos);

	let aniversario = new Date(valorNascimento.value);
	if(valorNascimento.value !== ""){

		let anosTotais = hoje.getFullYear() - aniversario.getFullYear() - (hoje.getMonth() < aniversario.getMonth() || (hoje.getMonth() === aniversario.getMonth() && hoje.getDate() < aniversario.getDate()));

		let MesesTotais = hoje.getMonth() - aniversario.getMonth() + (hoje.getFullYear() - aniversario.getFullYear()) * 12;

		let totalDeMeses = Math.abs(aniversario.getMonth() - hoje.getMonth());

		let totalDeDias = Math.abs(hoje.getDate() - aniversario.getDate());

		let diasTotais = Math.round(
			Math.abs(hoje.getTime() - aniversario.getTime()) / umDia
		);

		let semanasTotais = Math.round(
			Math.abs(hoje.getTime() - aniversario.getTime()) / (umDia * semana)
		);

		let horasTotais = Math.round(
			Math.abs(hoje.getTime() - aniversario.getTime()) / umaHora
		);

		let minutosTotais = Math.round(
			Math.abs(hoje.getTime() - aniversario.getTime()) / umMinutos
		);

		let segundosTotais = Math.round(
			Math.abs(hoje.getTime() - aniversario.getTime()) / segundos
		);

		idade.innerHTML = `${anosTotais} Anos ${totalDeMeses} Meses ${totalDeDias} Dias`;

		viveuEmAnos.innerHTML = anosTotais;
		viveuEmMeses.innerHTML = MesesTotais;
		viveuEmSemanas.innerHTML = semanasTotais;
		viveuEmDias.innerHTML = diasTotais;
		viveuEmHoras.innerHTML = horasTotais;
		viveuEmMinutos.innerHTML = minutosTotais;
		viveuEmSegundos.innerHTML = segundosTotais;

		let diaAniversarioEsseAno = new Date(`${hoje.getFullYear()} - ${aniversario.getMonth() + 1} - ${aniversario.getDate()}`);
		if (hoje > diaAniversarioEsseAno) {
			diaAniversarioEsseAno.setFullYear(hoje.getFullYear() + 1);
		}

		let totalDiasSobrando = Math.round(
			Math.abs(diaAniversarioEsseAno.getTime() - hoje.getTime()) / umDia
		);

		diasFaltando.innerText = totalDiasSobrando;
	}

	dataNascimento = valorNascimento.value;
	recebeDataDeNascimento.innerHTML = valorNascimento.value
}


//Eventos das operações

btnNascimento.addEventListener("click", pegarData);


