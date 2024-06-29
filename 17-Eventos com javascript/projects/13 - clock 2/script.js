localHoras = document.querySelector(".horas");
localMinutos = document.queySelector(".minutos");
localSegundos = document.querySelector(".segundos")
const hoje = new Date();

let iniciarRelogio = () => {
	let hora = hoje.getHours();
	let minuto = hoje.getMinutes();
	let segundo = hoje.getSeconds();

	localHoras.innerHTML = hora;
	localMinutos.innerHTML = minuto;
	localSegundos.innerHTML = segundo;
}

document.onload = iniciarRelogio();
