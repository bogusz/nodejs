var http = require('http')
var requestCount = 0

http.createServer(function (req, res) {	
  res.writeHead(200, {'Content-Type': 'text/plain'})
  requestCount++
  res.end('Request counter: ' + requestCount + '\n')
  
}).listen(1337, '127.0.0.1')

console.log('Server running at http://127.0.0.1:1337/')