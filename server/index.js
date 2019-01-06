const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const pino = require('express-pino-logger')()
const data = require('./mockedData/data.json')

const PORT = process.env.PORT || 3001

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(pino)

app.get('/api/v1/deals', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.send(data)
})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../build')))
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
  })
}

// eslint-disable-next-line
app.listen(PORT, () => console.log(`Express server is running on localhost:${PORT}`))
