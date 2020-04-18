const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

BillingCycle.route('count', (request, response) => {
  BillingCycle.countDocuments((error, value) => {
    if (error) {
      response.status(500).json({ errors: [error] })
    } else {
      response.json({ value })
    }
  })
})
BillingCycle.route('summary', (request, response) => {
  BillingCycle.aggregate(
    [
      {
        $project: {
          credit: { $sum: '$credits.value' },
          debt: { $sum: '$debts.value' }
        }
      },
      {
        $group: {
          _id: null,
          credit: { $sum: '$credit' },
          debt: { $sum: '$debt' }
        }
      },
      {
        $project: { _id: 0, credit: 1, debt: 1 }
      }
    ],
    (error, result) => {
      if (error) {
        response.status(500).json({ errors: [error] })
      } else {
        response.json(result[0] || { credit: 0, debt: 0 })
      }
    }
  )
})
module.exports = BillingCycle
