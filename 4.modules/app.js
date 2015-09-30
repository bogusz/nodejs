var http = require('http')
var htmlBuilder = require('./htmlBuilder')

var server = http.createServer(function (req, res) {
  html = htmlBuilder.h1("Welcome!") + htmlBuilder.p("Hello") + htmlBuilder.p("World")
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(html)
})

server.listen(1337, '127.0.0.1')

console.log('Server running at http://127.0.0.1:1337/')
