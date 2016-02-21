var express = require('express')
var cons = require('consolidate')
var app = express()

app.use(express.static('public'))

app.listen(8080, function() {
  console.log('ready!')
})
