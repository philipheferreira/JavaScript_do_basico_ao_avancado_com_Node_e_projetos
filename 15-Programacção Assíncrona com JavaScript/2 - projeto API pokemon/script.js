//definição de variaveis que vão receber as infos do pokemon
let pokemonImagem = document.querySelector(".imagem");
let pokemonNome = document.querySelector(".nome");
let pokemonId = document.querySelector(".Id");
let pokemonTipo = document.querySelector(".tipo");
let pokemonAltura = document.querySelector(".altura");
let pokemonPeso = document.querySelector(".peso");

const getPokemonUrl = 'https://pokeapi.co/api/v2/' //url da API

// chamada geral da API
const getPokemon = async (id) => {
	try {
		const responsePokemon = await fetch(getPokemonUrl + "pokemon/" + id); // pega a url e direciona a id pokemon
		const pokemon = await responsePokemon.json(); // converte para info json
		return pokemon; // retorna pokemon pesquisado

	} catch(err){
		console.log(err);
	}
}

// chamada para pegar a info de tipo de pokemon
const getPokemonTipo = async (numeroTipo) => {
	try {
		const pokemonTipo = await fetch(getPokemonUrl+ "type/" + numeroTipo);
		const tipo = await pokemonTipo.json();
		return tipo; // retorna pokemon pesquisado

	} catch(err){
		console.log(err);
	}
}


// função que faz os repasses das informações da API para as variaveis no html
let fecthPokemonInformacoes = (chamadaPokemonAPI, chamadaPokemonTipo) => {

	pokemonNome.innerHTML ="- " + chamadaPokemonAPI.name; // repassa nome
	pokemonId.innerHTML = chamadaPokemonAPI.id;
	pokemonTipo.innerHTML = "Tipo: " + chamadaPokemonTipo.name;
	pokemonAltura.innerHTML ="Altura: " + chamadaPokemonAPI.height;
	pokemonPeso.innerHTML = "Peso: " + chamadaPokemonAPI.weight;
	
}


//informações que serão repassadas para fazer as buscas na API
let idPokemon1 = 4;
let numeroTipoPokemon1 = 10;

// definição de id para chamadas e chamadas de todas as funções dentro da chamada assincrona
(async () => {
	let chamadaPokemonAPI = await getPokemon(idPokemon1);
	let chamadaPokemonTipo = await getPokemonTipo(numeroTipoPokemon1);
	fecthPokemonInformacoes(chamadaPokemonAPI, chamadaPokemonTipo);
	pokemonImagem.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/' + idPokemon1 + '.png';
	console.log(chamadaPokemonAPI);
})()

