let infoPokemon = document.querySelector(".nome");

const getPokemonUrl = 'https://pokeapi.co/api/v2/'

const getPokemon = async (id) => {
	try {
		const responsePokemon = await fetch(getPokemonUrl + "pokemon/" + id);
		const pokemon = await responsePokemon.json();
		return pokemon;

	} catch(err){
		console.log(err);
	}
}

(async () => {
	let pokemon1 = await getPokemon('72');
	infoPokemon.innerHTML = pokemon1;
	console.log(pokemon1);
})()


