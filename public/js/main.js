const express = require('express')
const app = express()
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.send('hello world')
})
