if(Posts.find().count() === 0){
	Posts.insert({
		title: 'Anyela',
		author: 'Goalkeeper112',
		text: 'Anyela es lo que tú terminal necesita Anyela fue creada con el fin de ser una alternativa a Betty, Siri o Google Now en la alternativa, la misma es desarrollada con node.js, Anyela puede resolver tus problemas con la terminal en linux',
		url: 'https://www.npmjs.org/package/anyela'
	});

	Posts.insert({
		title: 'Flipteek',
		author: 'Goalkeeper112',
		text: ' flipteek! es una Aplicación para tomar notas, guardarlas y poder visualizarlas desde cualquier dispositivo de la red',
		url: 'https://www.npmjs.org/package/flipteek'
	});

	Posts.insert({
		title: 'Zamscanner',
		author: 'Goalkeeper112',
		text: ' Escaneador de puertos individual escrito en javascript puro',
		url: 'https://www.npmjs.org/package/zamscanner'
	});

}