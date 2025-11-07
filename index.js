// require module
var connect = require('connect')
 
// create app
var app = connect()


/*
function HomePage(req,res,next)
{
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
}
app.use('/Piratheesh Gunaseelan' ,HomePage);
app.listen(3000);
console.log('Server is running on local host')

*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




















