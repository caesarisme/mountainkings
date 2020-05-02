// Model imports
const Event = require('../models/Event')
const User = require('../models/User')


module.exports = {
  createEvent: async (req, res) => {
    const {
      title,
      price,
      image,
      description,
      categories,
      isUniversityEvent,
      eventDate,
      registrationStartDate,
      registrationEndDate,
      basicServices,
      additionalServices
    } = req.body
  }
}