const express = require('express')
const path = require('path')

console.log('Starting micro front-ends server...')

const app = express()

app.use('/mfe/welcome', express.static(path.join(__dirname, '..', 'welcome', 'dist')))
app.use('/mfe/music', express.static(path.join(__dirname,  '..', 'music', 'build')))
app.use('/', express.static(path.join(__dirname, '..', 'bootstrap', 'dist')))


app.listen(3000, () => {
  console.log('Express app started on port 3000.')
})
