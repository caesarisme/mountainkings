// const router = express.Router()
const router = require('express-promise-router')() // Роутер сам ловит ошибки, чтобы каждый раз не имплементривать try catch

// Controller imports
const UserController = require('../controllers/UserController')

// Validations
const { validateParam, validateBody, schemas } = require('../helpers/routeHelpers')

//Routes
router.route('/')
  .get(UserController.index)
  .post(validateBody(schemas.userSchema), UserController.newUser)


router.route('/:userId')
  .get(
    validateParam('userId', schemas.idSchema),
    UserController.getUser
  )
  .put(
    [ validateParam('userId', schemas.idSchema), validateBody(schemas.userSchema) ],
    UserController.replaceUser
  )
  .patch(
    [ validateParam('userId', schemas.idSchema), validateBody(schemas.userOptionalSchema) ],
    UserController.updateUser
  )
  .delete(
    validateParam('userId', schemas.idSchema),
    UserController.deleteUser
  )


router.route('/:userId/cars')
  .get(
    validateParam('userId', schemas.idSchema),
    UserController.getUserCars
  )
  .post(
    [ validateParam('userId', schemas.idSchema), validateBody(schemas.userCarSchema) ],
    UserController.newUserCar
  )

module.exports = router
