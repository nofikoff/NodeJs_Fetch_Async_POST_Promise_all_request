const fetch = require('node-fetch');
let myHeaders = new fetch.Headers();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
myHeaders.append("Authorization", "Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "description": "Demo"
});

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

Promise.all([
 fetch("https://vinteo.loc/api/v1/conferences", requestOptions),
 fetch("https://vinteo.loc/api/v1/conferences", requestOptions),
 fetch("https://vinteo.loc/api/v1/conferences", requestOptions),
 fetch("https://vinteo.loc/api/v1/conferences", requestOptions),
 fetch("https://vinteo.loc/api/v1/conferences", requestOptions),
 fetch("https://vinteo.loc/api/v1/conferences", requestOptions),
 fetch("https://vinteo.loc/api/v1/conferences", requestOptions),
 fetch("https://vinteo.loc/api/v1/conferences", requestOptions),
 fetch("https://vinteo.loc/api/v1/conferences", requestOptions),
 fetch("https://vinteo.loc/api/v1/conferences", requestOptions),
 fetch("https://vinteo.loc/api/v1/conferences", requestOptions),
 fetch("https://vinteo.loc/api/v1/conferences", requestOptions),
 fetch("https://vinteo.loc/api/v1/conferences", requestOptions),
 fetch("https://vinteo.loc/api/v1/conferences", requestOptions),
 fetch("https://vinteo.loc/api/v1/conferences", requestOptions),
 fetch("https://vinteo.loc/api/v1/conferences", requestOptions),
 fetch("https://vinteo.loc/api/v1/conferences", requestOptions),
 fetch("https://vinteo.loc/api/v1/conferences", requestOptions),
 fetch("https://vinteo.loc/api/v1/conferences", requestOptions),
 fetch("https://vinteo.loc/api/v1/conferences", requestOptions),
 fetch("https://vinteo.loc/api/v1/conferences", requestOptions),
 fetch("https://vinteo.loc/api/v1/conferences", requestOptions),
 fetch("https://vinteo.loc/api/v1/conferences", requestOptions),


]).then(function (responses) {
	// Get a JSON object from each of the responses
	return Promise.all(responses.map(function (response) {
		return response.text();
	}));
}).then(function (data) {
	// Log the data to the console
	// You would do something with both sets of data here
	console.log("\n", data);
}).catch(function (error) {
	// if there's an error, log it
	console.log("\n", error);
});


