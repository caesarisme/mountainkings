const router = require('express-promise-router')()

// Helpers
const { jwtRequired } = require('../helpers/jwt.helpers')
const { validateBody, validateParam, schemas } = require('../helpers/validation.helpers')

// Controller
const Controller = require('../controllers/event.controller')


router.route('/')
  .post(Controller.createEvent)


module.exports = router