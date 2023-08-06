'use strict'

let apiUrl = 'https://jsonplaceholder.typicode.com/posts';
let apiConfig = {method:'GET'};

fetch(apiUrl, apiConfig)
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.log(error))

