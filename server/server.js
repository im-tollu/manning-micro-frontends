const express = require('express')

console.log('Starting micro front-ends server...')

const app = express()

app.use('/mfe/welcome', express.static(__dirname + '/../welcome/dist'))
app.use('/mfe/music', express.static(__dirname + '/../music/build'))
app.use('/', express.static(__dirname + '/../bootstrap/dist'))


app.listen(3000, () => {
  console.log('Express app started on port 3000.')
})
