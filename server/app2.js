import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('*', (req, res)=> {
  res.writeHead(200, {"Content-Type": "text/plain"})
  res.end("Express heroku")
})

app.listen(port, err => {
  if (err) {
    throw err
  }
  console.log(`> Ready on port:${port}`)
})
