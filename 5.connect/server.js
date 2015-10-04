var connect = require('connect')
var http = require('http')

var app = connect()

function doFirst(request, resopnse, next) {
  console.log("test")
  next()
}


function profile(request, resopnse, next) {
  console.log('User requested profile..');
  next()
}

function feed(request, resopnse, next) {
  console.log('User requested feed..');
  next()
}

// simple middleware
app.use(doFirst)

// simple routing
app.use('/profile', profile)
app.use('/feed', feed)

http.createServer(app).listen(1337)
