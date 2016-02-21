var express = require('express')
var cons = require('consolidate')
var app = express()

app.use(express.static('public'))

app.listen(process.env.PORT || 8080, function() {
  console.log('ready!')
})
