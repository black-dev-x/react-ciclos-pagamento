const express = require('express')
const BillingCycle = require('../api/billingCycle/billingCycle')

module.exports = app => {
  const router = express.Router()
  app.use('/api', router)
  BillingCycle.register(router, '/billingCycles')
}
