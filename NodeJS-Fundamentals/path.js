const path = require('path');
const { URL } = require('url');

console.log(path.join(__dirname, '..', 'first', 'second', 'third'))
const fullpath = path.resolve(__dirname, 'first', 'second', 'third')

console.log('Parsing', path.parse(fullpath));

// ---------------------------

const siteURL = 'https://localhost:8080/users?id=5123'

const url = new URL(siteURL)
console.log(url);