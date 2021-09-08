//Https reguest to fetch data from an API
const request = new XMLHttpRequest();
request.open('GET','https://jsonplaceholder.typicode.com/posts');
request.send();