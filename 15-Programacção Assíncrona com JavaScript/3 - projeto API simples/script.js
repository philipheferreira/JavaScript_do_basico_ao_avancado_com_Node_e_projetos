	const simpleAPIUrl = 'https://localhost:7122/api/Produtos';

	const getTodosProdutos = async () => {
		try {
			const responseTodosProdutos = await fetch(simpleAPIUrl); // pega a url e direciona para o caminho de todos os produtos
			const Todosprodutos = await responseTodosProdutos.json(); // converte para info json
			return Todosprodutos;

		} catch(err){
			console.log(err);
		}
	}

	


	(async () => {
		console.log(getTodosProdutos());
	})()


