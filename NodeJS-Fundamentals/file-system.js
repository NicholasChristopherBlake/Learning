const fs = require('fs')
const path = require('path')
const fsPromise = require('fs/promises')

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//   if (err) {
//     throw err;
//   }
// })

const text = process.env.TEXT || '';

fsPromise.writeFile(path.resolve(__dirname, 'text.txt'), text)
  .then(() => fsPromise.readFile(path.resolve(__dirname, 'text.txt')))
  .then(data => data.split(' ').length)
  .then(count => fsPromise.writeFile(path.resolve(__dirname, 'count.txt'), `Number of words ${count}`))
  .then(() => fsPromise.rm(path.resolve(__dirname, 'text.txt')))
