//console.log("Hello world"); - para fazer um teste de verificação

//GOAL RESPOSTA CERTA - eu clico na resposta certa e aparece-me HTML e CSS a dizer "Correto"

//GOAL RESPOSTA ERRADAS - eu clico na resposta errada e aparece-me HTML e CSS a dizer "Ops errada" + "algo especifico à resposta que eu cliquei" + algo comum a todas


//GOAL RESPOSTA CERTA

//1. Buscar o botao com a resposta correta
const respostaCerta = document.getElementById('resposta-certa');

//1.2 tenho que ir buscar o <p> para onde eu quero injetar conteudo
const explicacao = document.getElementById('explicacao');


//2. Tenho que por o elemento resposta certa a escutar o meu 'click'
respostaCerta.addEventListener('click', (event) => {
	explicacao.innerHTML = "<strong>Correto!!</strong>"
})

// GOAL RESPOSTAS ERRADAS

//1. Tenho que ir buscar todas as respostas com a classe resposta-errada

const respostasErradas = document.querySelectorAll('.resposta-errada');

//2. Iterar por cada resposta errada
respostasErradas.forEach((resposta) => {
	//3. JS Estar a escuta do click em cada resposta
	resposta.addEventListener('click', (event) => {
		let explicacaoConteudo = "<strong>Ops, errado ...</strong>"

		//4. Distingir que reposta é se é HMTL, CSS ou Ruby
		if(resposta.id === "resposta.html"){
			explicacaoConteudo += " HTML permite-nos dar estrutura e conteudo à nossa página."
		} else if (resposta.id === "resposta-css"){
			explicacaoConteudo = explicacaoConteudo + "CSS permite-nos dar estilo à nossa página."
		} else {
			explicacaoConteudo += "Ruby é uma das várias linguagens que pode ser utilizada para backend."
		}

		explicacaoConteudo += "Tenta outra vez"

		explicacao.innerHTML = explicacaoConteudo;
	})
})
