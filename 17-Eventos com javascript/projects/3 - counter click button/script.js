btn1 = document.querySelector(".botao1");
btn2 = document.querySelector(".botao2");
count = 0;

btn1.addEventListener("click", adicionar);

btn2.addEventListener("click", subtrair);

function adicionar(){
	count++;
	console.log(count);
}

function subtrair(){
	count--;
	console.log(count);
}