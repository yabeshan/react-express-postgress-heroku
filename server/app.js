const http = require('http')
const port = process.env.PORT || 3000

http.createServer((req, res) => {
  res.writeHead(200)
  res.end("Hello 2")
}).listen(port, err => {
  if (err) {
    throw err
  }
  console.log(`> Ready on port:${port}`)
})
