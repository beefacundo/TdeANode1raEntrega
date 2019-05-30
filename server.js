let data = require('./datos')
const express = require('express')
const app = express()
     
    app.get('/', function (req, res) {
          res.send(data.listCourses())
    })
 
app.listen(3000)

