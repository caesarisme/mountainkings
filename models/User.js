const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  cars: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'car'
  }]
})

module.exports = mongoose.model('user', userSchema)
