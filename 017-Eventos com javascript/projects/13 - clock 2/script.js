
localHoras = document.querySelector(".horas");
localMinutos = document.querySelector(".minutos");
localSegundos = document.querySelector(".segundos")

let iniciarRelogio = () => {

	const hoje = new Date(); // precisa estar na função
	let hora = hoje.getHours();
	let minuto = hoje.getMinutes();
	let segundo = hoje.getSeconds();
	localHoras.innerHTML = hora;
	localMinutos.innerHTML = minuto;
	localSegundos.innerHTML = segundo;
	setTimeout(iniciarRelogio, 1000);
}

document.body.onload = iniciarRelogio(); // onloadd para carregar a função automaticamente quando inicializar a pagina

