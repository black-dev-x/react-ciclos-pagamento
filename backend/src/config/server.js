const express = require('express')
const port = 3003

const app = express()
app.use(express.json())

app.listen(port, _ => console.log('Servidor esta rodando'))
