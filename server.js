// server.js

const express = require('express')
const next = require('next')
const helmet = require('helmet') // Import the helmet middleware

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.port || 3000

app.prepare().then(() => {
  const server = express()

  // Use the helmet middleware to set secure HTTP headers
  server.use(helmet())

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})