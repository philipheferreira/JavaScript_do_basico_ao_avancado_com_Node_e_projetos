//definição de infos do pokemon
let pokemonNome = document.querySelector(".nome");
let imagemPokemon = document.querySelector(".imagem");

const getPokemonUrl = 'https://pokeapi.co/api/v2/' //url da API


// chamada da API e depuração da informação
const getPokemon = async (id) => {
	try {
		const responsePokemon = await fetch(getPokemonUrl + "pokemon/" + id); // pega a url e direciona a id pokemon
		const pokemon = await responsePokemon.json(); // converte para info json
		return pokemon; // retorna pokemon pesquisado

	} catch(err){
		console.log(err);
	}
}

// definição de id para chamadas e chamadas de todas as funções dentro da chamada assincrona
(async () => {
	let id = 4
	let chamadaPokemonAPI = await getPokemon(id);
	fecthPokemonInformacoes(chamadaPokemonAPI);
	imagemPokemon.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/' + id + '.png';
	console.log(chamadaPokemonAPI);
})()


let fecthPokemonInformacoes = (chamadaPokemonAPI) => {

	pokemonNome.innerHTML = chamadaPokemonAPI.name; // repassa nome

}



