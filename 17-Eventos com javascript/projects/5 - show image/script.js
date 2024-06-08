btn = document.querySelector(".botao");

let valor = 0

btn.addEventListener("click", mudar);

function mudar(){
	valor++;
	if(valor == 1){
		document.querySelector(".imagem").src = "img/naruto.jpg"
		console.log(valor);
	}else
	if(valor == 2){
		document.querySelector(".image").src = "img/dragon_ball.jpg"
		console.log(valor);
	}else
	if(valor == 3){
		document.querySelector(".image").src = "img/one_peace.jpg"
		console.log(valor);
	}else{
		console.log(valor);
	}

}