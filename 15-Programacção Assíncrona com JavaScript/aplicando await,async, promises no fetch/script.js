
//Exemplificar o que acontece
const getAPIPokemon = () => {
	const data = fetch('https://pokeapi.co/api/v2/'); // endereço da API que está sendo armazenado dentro de DATA
	console.log(data); // imprime o que tem dentro de DATA, que é uma promise, pois ele tem o objetivo de dizer que naquela vai ter alguma coisa mas que ele ainda não tem a resposta, então é necessario avisar que só ira prosseguir possuindo essa resposta
}

getAPIPokemon();

// Primeira forma de fazer: Usando o Then, você avisa o javascript que tendo a resposta você retorna o valor

const getAPIPokemonComThen = () => {
	const data = fetch("https://pokeapi.co/api/v2/");
	.then((response) => { // O then avisa para o javascript que quando se tiver a resposta da promise retorne a seguinte resposta da promessa
		return response.json(); // Quando retornar ele converte a resposta no formato json para poder ser usado
	})

}