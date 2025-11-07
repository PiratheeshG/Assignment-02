// require module
var connect = require('connect')
 
// create app
var app = connect()

function HomePage(req,res,next)
{
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
}
app.use('/Piratheesh Gunaseelan' ,website);
app.listen(3000);
console.log('Server is running on local host')























const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log('Server running at http://${hostname}:${port}/');
});
