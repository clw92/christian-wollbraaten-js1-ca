const url = 'https://rickandmortyapi.com/api/character/';

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

function handleJson(json) {
	const results = json.results;
	console.dir(results);

	const resultsContainer = document.querySelector('.card');

	let html = '';

	results.forEach(function(results) {
		let imgUrl = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg';

		if (results.image) {
			imgUrl = results.image;
		}

		html += `<div class="col-sm-6 col-md-4 col-lg-3">                
        <div class="card">    
            <img class="image" src=${imgUrl} alt="Character Name">
            <div class="details">
                <h4 class="name">${results.name}</h4>
                <p>Type:</p>    
                <p>Episode count: ${results.episode}</p>                                  
                <a class="btn btn-primary" href="details.html?id=${results.id}">Details</a>
            </div>
        </div>
    </div>`;
	});

	resultsContainer.innerHTML = html;
}

const baseUrl = 'https://rickandmortyapi.com/api/character/';
const id = '${id}';
/*const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has('id')) {
	id = params.get('id');
}
else {
	document.location.href = 'error.html';
}*/
