btn = document.querySelector(".botao");

btn.addEventListener("click", function(){
	document.body.style.backgroundColor = 
	'rgb(' + Math.round(Math.random() * 255) + 
	',' + Math.round(Math.random() * 255) + 
	',' + Math.round(Math.random() * 255) + ')';
})