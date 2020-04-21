const router = require('express-promise-router')()

// Controller imports
const CarController = require('../controllers/CarController')

// Validations
const { validateParam, validateBody, schemas } = require('../helpers/routeHelpers')

// Routes
router.route('/')
  .get(CarController.index)
  .post(
    validateBody(schemas.carSchema),
    CarController.newCar
  )


router.route('/:carId')
  .get(
    validateParam('carId', schemas.idSchema),
    CarController.getCar
  )
  .put(
    [ validateParam('carId', schemas.idSchema), validateBody(schemas.putCarSchema) ],
    CarController.replaceCar
  )
  .patch(
    [ validateParam('carId', schemas.idSchema), validateBody(schemas.patchCarSchema) ],
    CarController.updateCar
  )
  .delete(
    [validateParam('carId', schemas.idSchema)],
    CarController.deleteCar
  )


module.exports = router
