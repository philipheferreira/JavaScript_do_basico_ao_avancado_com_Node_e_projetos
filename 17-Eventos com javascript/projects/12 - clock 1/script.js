function iniciarRelogio(){
	const hoje = new Date(); /* A constante hoje recebe a new Date nas suas operações */
	let horas = hoje.getHours(); /*  */
	let minutos = hoje.getMinutes(); /*  */
	let segundos = hoje.getSeconds(); /*  */
	document.querySelector(".relogio").innerHTML = horas + ":" + minutos + ":" + segundos;
	setTimeout(startTime, 1000); /* A cada 1 segundo a pagina reenvia informações */ 
}

