// Model imports
const User = require('../models/User')
const Car = require('../models/Car')


// Actions
module.exports = {
  index: async (req, res, next) => {
    const users = await User.find({})

    res.status(200).json(users)
  },

  newUser: async (req, res, next) => { // Validated
    const newUser = new User(req.value.body)
    await newUser.save()

    res.status(201).json(newUser)
  },

  getUser: async (req, res, next) => { // Validated
    const { userId } = req.value.params
    const user = await User.findById(userId)

    res.status(200).json(user)
  },

  replaceUser: async (req, res, next) => { // Validated
    const { userId } = req.value.params
    const newUser = req.value.body
    const result = await User.findByIdAndUpdate(userId, newUser)

    res.status(200).json({ success: true })
  },

  updateUser: async (req, res, next) => { // Validated
    const { userId } = req.value.params
    const newUser = req.value.body
    await User.findByIdAndUpdate(userId, newUser)

    res.status(200).json({ success: true })
  },

  deleteUser: async (req, res, next) => { // Validated
    const { userId } = req.value.params
    await User.findByIdAndDelete(userId)

    res.status(200).json({ success: true })
  },

  getUserCars: async (req, res, next) => { // Validated
    const { userId } = req.value.params
    const user = await User.findById(userId).populate('cars')

    res.status(200).json(user.cars)
  },

  newUserCar: async (req, res, next) => { // Validated
    const { userId } = req.value.params
    const user = await User.findById(userId)
    const newCar = new Car(req.value.body)

    newCar.seller = user
    await newCar.save()

    user.cars.push(newCar)
    await user.save()

    res.status(201).json(newCar)
  }
}