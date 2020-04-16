const express = require('express')

const routes = require('./routes')

const port = 3003

const app = express()
app.use(express.json())
routes(app)
app.listen(port, _ => console.log('Servidor esta rodando'))
module.exports = app
