let contador = 0;
let botao = document.querySelector(".imgbotao");
let imagem = document.querySelector(".imagem");

botao.addEventListener("click", function(){
	contador++;

	if(contador == 3){
		contador = 0;
	}

trocarImagem(contador);
});

function trocarImagem(contador){
	if (contador == 0){
		imagem.src = "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpg";
	}else
	if(contador == 1){
		imagem.src = "https://www.alucare.fr/wp-content/uploads/2023/08/Naruto-scaled.jpg";
	}else
	if(contador == 2){
		imagem.src = "https://t2.tudocdn.net/721690?w=646&h=284";
	}
}
