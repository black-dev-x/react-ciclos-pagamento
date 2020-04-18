const express = require('express')
const billingCycleService = require('../api/billingCycle/billingCycleService')

const app = express()
app.use(express.json())

const router = express.Router()
app.use('/api', router)
billingCycleService.register(router, '/billingCycles')

app.listen(3003, _ => console.log('Servidor esta rodando'))
