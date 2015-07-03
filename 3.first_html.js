var http = require('http')
var staticHtml = '<html><body><h1>Hello World in HTML!</h1></body></html>'	

var server = http.createServer(function (req, res) {	  
  res.writeHead(200, {'Content-Type': 'text/html'})  
  res.end(staticHtml)  
})

server.listen(1337, '127.0.0.1')

console.log('Server running at http://127.0.0.1:1337/')