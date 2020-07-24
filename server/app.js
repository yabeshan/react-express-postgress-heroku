import express from 'express'

const app = express()
const port = process.env.PORT || 3100

if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res)=> {
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.end("Express prod")
  })
}

app.get('*', (req, res)=> {
  res.writeHead(200, {"Content-Type": "text/plain"})
  res.end("Express dev")
})


/*
// app.use('/api/signin', require('./routes/signin.routes'))
app.use('/api/articles', require('./routes/articles.routes'))

app.get('*', (req, res)=> {
  res.writeHead(200, {"Content-Type": "text/plain"})
  res.end("Express app")
})
*/
app.listen(port, err => {
  if (err) {
    throw err
  }
  console.log(`> Ready on port:${port}`)
})
