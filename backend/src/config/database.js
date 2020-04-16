const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/mymoney', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
