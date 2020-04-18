const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

BillingCycle.route('count', (request, response) => {
  BillingCycle.count((error, value) => {
    if (error) {
      response.status(500).json({ errors: [error] })
    } else {
      response.json({ value })
    }
  })
})
module.exports = BillingCycle
