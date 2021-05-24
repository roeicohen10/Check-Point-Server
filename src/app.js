const express = require('express')
const cors = require('cors')

require('../db/mongoose')
const employeeRouter = require('./routers/employee')

const app = express()

app.use(cors())
app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use(employeeRouter)

module.exports = app