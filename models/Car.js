const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
})

module.exports = mongoose.model('car', carSchema)