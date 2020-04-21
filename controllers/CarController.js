// Model imports
const Car = require('../models/Car')
const User = require('../models/User')

// Actions
module.exports = {
  index: async (req, res, next) => {
    const cars = await Car.find({})

    res.status(200).json(cars)
  },

  newCar: async (req, res, next) => {
    const seller = await User.findById(req.value.body.seller)
    const newCarData = req.value.body
    delete newCarData.seller
    const newCar = new Car(newCarData)

    newCar.seller = seller
    await newCar.save()

    seller.cars.push(newCar)
    await seller.save()

    res.status(201).json(newCar)
  },

  getCar: async (req, res, next) => {
    const { carId } = req.value.params
    const car = await Car.findById(carId).populate('seller')

    res.status(200).json(car)
  },

  replaceCar: async (req, res, next) => {
    const { carId } = req.value.params
    const newCarData = req.value.body
    const result = await Car.findByIdAndUpdate(carId, newCarData)

    res.status(200).json({ success: true })
  },

  updateCar: async (req, res, next) => {
    const { carId } = req.value.params
    const newCarData = req.value.body
    const result = await Car.findByIdAndUpdate(carId, newCarData)

    res.status(200).json({ success: true })
  },

  deleteCar: async (req, res, next) => {
    const { carId } = req.value.params
    const car = await Car.findById(carId)

    if (!car) {
      return res.status(404).json({ success: false })
    }

    await car.remove()

    const sellerId = car.seller
    const seller = await User.findById(sellerId)
    seller.cars.pull(car)
    seller.save()

    res.status(200).json({ success: true })
  }
}