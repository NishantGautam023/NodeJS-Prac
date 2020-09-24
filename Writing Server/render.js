const http = require('http');
const port = 8000;

function httpHandler(req, res) {
 console.log(req.url)
 res.writeHead(200, {'Content-Type': 'text/html'})
 res.end("<h1> Welcome to the Server!!! </h1>" )
}



const server = http.createServer(httpHandler)

server.listen(port, function(err) {
    if(err) {
        console.log(err);
        return;
    }
    console.log(`The web server is running on ${port} port number`)
});