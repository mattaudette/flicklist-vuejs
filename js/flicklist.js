

var api = {
	root: "https://api.themoviedb.org/3",
	token: "75824302aff29cbce9b23eca35f4b76c" // TODO put your api key here
}

/**
 * Makes an AJAX request to themoviedb.org, asking for some movies
 * if successful, prints the results to the console
 */
function testTheAPI() {
	fetch(`${api.root}/configuration?api_key=${api.token}`)
		.then(resp => resp.ok ? resp : Promise.reject(resp))
		.then(function(response) {
			return response.json();
		}).then(function(data) {
			console.log(data);
		}).catch(function(err) {
			console.log(err);
		});
		// })
		// 	console.log("We got a response from The Movie DB!");
		// 	console.log(response);
		// })
}

console.log("The script loaded!");
testTheAPI();
