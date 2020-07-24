import express from 'express'
import path from 'path'

const app = express()
const port = process.env.PORT || 3100

// app.use('/api/signin', require('./server/routes/signin.routes'))
app.use('/api/articles', require('./server/routes/articles.routes'))

app.use('/', express.static(path.join(__dirname, 'client', 'build')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

/*
if (process.env.NODE_ENV === 'production') {
  // app.get('*', (req, res)=> {
  //   res.writeHead(200, {"Content-Type": "text/plain"})
  //   res.end("Express prod")
  // })
} else {
  app.get('*', (req, res)=> {
    res.writeHead(200, {"Content-Type": "text/plain"})
    res.end("Express development")
  })
}
*/



/*

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
