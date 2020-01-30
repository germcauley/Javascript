const express = require('express')
const path = require('path')

const port = 3000
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/emotion', function(req, res) {
  // Valence of emotion section code will be here for not it returns nothing
  res.send({})
})

app.listen(port, function () {
  console.log(`Listening on port ${port}!`)
})