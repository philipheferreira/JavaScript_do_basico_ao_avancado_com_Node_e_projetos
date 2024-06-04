let btn1 = document.querySelector(".botao1");
let btn2 = document.querySelector(".botao2");
let tela = document.querySelector(".mostrador");
let count = 0;

btn1.addEventListener("click", adicionar);

btn2.addEventListener("click", subtrair);

function adicionar(){
	count++;
	console.log(count);
	tela.innerHTML = count;
}

function subtrair(){
	count--;
	console.log(count);
	tela.InnerHTML = count
}