import express from 'express'
import path from 'path'

import { ArticlesRoutes, SigninRoutes } from './server/routes'

const app = express()
const port = process.env.PORT || 3100

app.use('/api/signin', SigninRoutes)
app.use('/api/articles', ArticlesRoutes)

// if (process.env.NODE_ENV === 'production') {}
app.use('/', express.static(path.join(__dirname, 'client', 'build')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

app.listen(port, err => {
  if (err) {
    throw err
  }
  console.log(`> Ready on port:${port}`)
})
