const url = 'https://rickandmortyapi.com/api/character/1234';

fetch(url)
	.then(function(response) {
		return response.json();
	})
	.then(function(json) {
		handleJson(json);
	})
	.catch(function(error) {
		console.log(error);
	});
