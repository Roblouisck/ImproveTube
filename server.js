const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()

app.use(express.static('dist'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './src/public/index.html'))
})

app.listen(port)
console.log('Server started')