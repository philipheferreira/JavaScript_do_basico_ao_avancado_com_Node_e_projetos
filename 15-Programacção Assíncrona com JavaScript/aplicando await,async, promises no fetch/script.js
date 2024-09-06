

//Exemplificar o que acontece
const getAPIPokemon = () => {
	const data = fetch('https://pokeapi.co/api/v2/'); // endereço da API que está sendo armazenado dentro de DATA
	console.log(data); // imprime o que tem dentro de DATA, que é uma promise, pois ele tem o objetivo de dizer que naquela vai ter alguma coisa mas que ele ainda não tem a resposta, então é necessario avisar que só ira prosseguir possuindo essa resposta
	console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n");
}

console.log("Exemplo sem funcionalidades assincronas, apenas com a chamada fetch:");
getAPIPokemon();


// Primeira forma de fazer: Usando o Then, você avisa o javascript que tendo a resposta você retorna o valor

const getAPIPokemonComThen = () => {
	const data = fetch("https://pokeapi.co/api/v2/")
	.then((response) => { // O then avisa para o javascript que quando se tiver a resposta da promise retorne a seguinte resposta da promessa
		return response.json(); // Quando retornar ele converte a resposta no formato json para poder ser usado
	})
	.then(data => {
		console.log("Chamada usando apenas o comando then: ");
		console.log(data); //Puxa o Then depois de ser atualizado com o json
		console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n");
	})

}

getAPIPokemonComThen();


// Segunda forma de fazer: Usando async

const getAPIPokemonAsync = async () => { // ela já espera que seja uma promise, tanto que ela não confirma nada
	const response = await fetch('https://pokeapi.co/api/v2/'); // wait confirma a situação de que vai ter que esperar a resposta da API
	const data = await response.json(); // converte o response em json
	console.log("Chamada async");
	console.log(data); //imprime o que foi salvo dentro de response
	console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n");
}

getAPIPokemonAsync();


const getAPIPokemonAsyncComTryCath = async () => {
	try {
		const response = await fetch('https://pokeapi.co/api/v2/');
		const data = await response.json();
		console.log("Utilizando o async junto com o try catch");
		console.log(data);
		console.log("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n");

	} catch (err) {
		console.log(err);
	}
}

getAPIPokemonAsyncComTryCath();
