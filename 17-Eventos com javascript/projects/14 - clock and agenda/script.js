let campoHoras = document.querySelector(".horas");
let campoMinutos = document.querySelector(".minutos");
let campoSegundos = document.querySelector(".segundos");


let iniciarTempo = () => {
	let hoje = new Date(); // biblioteca Date
	let hora = hoje.getHours();
	let minuto = hoje.getMinutes();
	let segundo = hoje.getSeconds();

	campoHoras.innerHTML = hora;
	campoMinutos.innerHTML = minuto;
	campoSegundos.innerHTML = segundo;

	setTimeout(iniciarTempo, 1000);
}

document.body.addEventListener("load", iniciarTempo()); // Evento que está direcionando o body, linkando o onload relacionando a funcao iniciartempo()