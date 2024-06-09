let btn = document.querySelector(".enviar");
let nome = document.querySelector(".nome");

btn.addEventListener("click", function(){

		alert("Ola Sr(a) " + nome.value + ", O formulario foi enviado com sucesso");	
	
});