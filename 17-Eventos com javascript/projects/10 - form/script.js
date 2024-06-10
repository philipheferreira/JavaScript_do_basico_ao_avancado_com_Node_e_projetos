let btn = document.querySelector(".enviar");
let nome = document.querySelector(".nome");
let telefone = document.querySelector(".telefone");
let email = document.querySelector(".email");


btn.addEventListener("click", function(){
		console.log("Informações preenchidas");
		console.log("Nome: " + nome.value);
		console.log("Telefone:" + telefone.value);
		console.log("email: " + email.value);	
		alert("Suas informações são as seguintes. Nome:" + nome.value + "\nTelefone: " + telefone.value + "\nemail: " + email.value + ".");
});