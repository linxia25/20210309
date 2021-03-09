const http = require('http');
const dayjs = require('dayjs');

const server = http.createServer(function(request, response){

  response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  response.end(`<h1>Hello World!!</h1> <p>The current time is ${dayjs().$d}</p>`);

});

server.listen(8080, function(){
  console.log('Listening on port 8080.')
})