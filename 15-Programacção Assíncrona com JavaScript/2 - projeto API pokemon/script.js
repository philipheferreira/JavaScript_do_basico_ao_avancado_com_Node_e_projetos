//definição de variaveis que vão receber as infos do pokemon
let pokemonImagem1 = document.querySelector(".imagem1");
let pokemonNome1 = document.querySelector(".nome1");
let pokemonId1 = document.querySelector(".Id1");
let pokemonTipo1 = document.querySelector(".tipo1");
let pokemonAltura1 = document.querySelector(".altura1");
let pokemonPeso1 = document.querySelector(".peso1");

let pokemonImagem2 = document.querySelector(".imagem2");
let pokemonNome2 = document.querySelector(".nome2");
let pokemonId2 = document.querySelector(".Id2");
let pokemonTipo2 = document.querySelector(".tipo2");
let pokemonAltura2 = document.querySelector(".altura2");
let pokemonPeso2 = document.querySelector(".peso2");

let pokemonImagem3 = document.querySelector(".imagem3");
let pokemonNome3 = document.querySelector(".nome3");
let pokemonId3 = document.querySelector(".Id3");
let pokemonTipo3 = document.querySelector(".tipo3");
let pokemonAltura3 = document.querySelector(".altura3");
let pokemonPeso3 = document.querySelector(".peso3");

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
let fecthPokemonInformacoes = (chamadaPokemonAPI, chamadaPokemonTipo, pokemonNome, pokemonId, pokemonTipo, pokemonAltura, pokemonPeso) => {

	pokemonNome.innerHTML ="- " + chamadaPokemonAPI.name; // repassa nome
	pokemonId.innerHTML = chamadaPokemonAPI.id;
	pokemonTipo.innerHTML = "Tipo: " + chamadaPokemonTipo.name;
	pokemonAltura.innerHTML ="Altura: " + chamadaPokemonAPI.height;
	pokemonPeso.innerHTML = "Peso: " + chamadaPokemonAPI.weight;
	
}


//informações que serão repassadas para fazer as buscas na API
let idPokemon1 = 4;
let idPokemon2 = 5;
let idPokemon3 = 6;
let numeroTipoPokemon1 = 10;

// definição de id para chamadas e chamadas de todas as funções dentro da chamada assincrona
(async () => {
	let chamadaPokemonAPI1 = await getPokemon(idPokemon1);
	let chamadaPokemonTipo1 = await getPokemonTipo(numeroTipoPokemon1);
	fecthPokemonInformacoes(chamadaPokemonAPI1, chamadaPokemonTipo1, pokemonNome1, pokemonId1, pokemonTipo1, pokemonAltura1, pokemonPeso1);
	pokemonImagem1.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/' + idPokemon1 + '.png';

	let chamadaPokemonAPI2 = await getPokemon(idPokemon2);
	let chamadaPokemonTipo2 = await getPokemonTipo(numeroTipoPokemon1);
	fecthPokemonInformacoes(chamadaPokemonAPI2, chamadaPokemonTipo2, pokemonNome2, pokemonId2, pokemonTipo2, pokemonAltura2, pokemonPeso2);
	pokemonImagem2.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/' + idPokemon2 + '.png';

	let chamadaPokemonAPI3 = await getPokemon(idPokemon3);
	let chamadaPokemonTipo3 = await getPokemonTipo(numeroTipoPokemon1);
	fecthPokemonInformacoes(chamadaPokemonAPI3, chamadaPokemonTipo3, pokemonNome3, pokemonId3, pokemonTipo3, pokemonAltura3, pokemonPeso3);
	pokemonImagem3.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/' + idPokemon3 + '.png';

})()

