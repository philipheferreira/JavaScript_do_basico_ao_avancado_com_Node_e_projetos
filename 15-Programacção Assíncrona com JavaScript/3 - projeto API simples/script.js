	let id = document.querySelector(".campoID");
	let nome = document.querySelector(".campoNome");
	let preco = document.querySelector(".campoPreco");

	const simpleAPIUrl = 'https://localhost:7122/api/Produtos';

// chamada para o get de todos os produtos
	const getTodosProdutos = async () => {
		try {
			const responseTodosProdutos = await fetch(simpleAPIUrl); // pega a url e direciona para o caminho de todos os produtos
			const Todosprodutos = await responseTodosProdutos.json(); // converte para info json
			return Todosprodutos;

		} catch(err){
			console.log(err);
		}
	}


// faz o repasse para os campos no front
	let repasseProdutos = async () => {
		let chamadaTodosProdutos = await getTodosProdutos();

		id.innerHTML = chamadaTodosProdutos[0].id;
		nome.innerHTML = chamadaTodosProdutos[0].nome;
		preco.innerHTML = chamadaTodosProdutos[0].preco;

		console.log(chamadaTodosProdutos);

	}



// Chamada final para rodar tudo quando abre a aba
	(async () => {
		repasseProdutos();

	})()


