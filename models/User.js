const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  cars: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'car'
  }]
})

module.exports = mongoose.model('user', userSchema)
