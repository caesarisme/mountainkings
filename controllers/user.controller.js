const bcrypt = require('bcrypt')
const { v4: uuid } = require('uuid')
const config = require('config')

// Model imports
const User = require('../models/User')
const RefreshToken = require('../models/RefreshToken')

const { issueToken } = require('../helpers/jwt.helpers')

// Actions
module.exports = {
  register: async (req, res) => {
    const { phone, password, firstName, lastName } = req.validated.body

    const newUser = new User({
      phone,
      password: bcrypt.hashSync(password, 10),
      firstName,
      lastName
    })
    await newUser.save()

    res.sendStatus(201)
  },

  login: async (req, res) => {
    const { phone, password } = req.validated.body
    const candidate = await User.findOne({ phone })
    if (candidate && bcrypt.compareSync(password, candidate.password)) {
      const { _id: sub, role } = candidate
      const accessToken = issueToken({ sub, role }, { expiresIn: config.get('ACCESS_TOKEN_EXP') })
      const refreshToken = uuid()

      await (new RefreshToken({ sub, token: refreshToken })).save()

      return res.status(200).json({ accessToken, refreshToken })
    }

    res.sendStatus(401)
  },

  refresh: async (req, res) => {
    const { refreshToken } = req.validated.body
    const dbToken = await RefreshToken.findOne({ token: refreshToken })

    if (dbToken) {
      await dbToken.remove()
      const { _id: sub, role } = await User.findById(dbToken.sub)

      const accessToken = issueToken({ sub, role }, { expiresIn: config.get('ACCESS_TOKEN_EXP') })
      const refreshToken = uuid()

      await (new RefreshToken({ sub, token: refreshToken })).save()

      return res.status(200).json({ accessToken, refreshToken })
    }

    res.sendStatus(403)
  },

  logout: async (req, res) => {
    const { _id: sub } = req.user
    await RefreshToken.deleteMany({sub})
    res.sendStatus(200)
  }
}