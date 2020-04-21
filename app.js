const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/mongo_express_rest', {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

const app = express()

// Route imports
const userRoutes = require('./routes/userRoutes')
const carRoutes = require('./routes/carRoutes')

// Middlewares
app.use(logger('dev'))
app.use(bodyParser.json())

// Routes
app.use('/users', userRoutes)
app.use('/cars', carRoutes)

// Catch 404 errors and forward them to error handler
app.use((req, res, next) => {
  const err = new Error('Not found')
  err.status = 404
  next(err)
})

// Error handler function
app.use((err, req, res, next) => {
  const error = app.get('env') === 'development' ? err : {}
  const status = err.status || 500

  // Respond to client
  res.status(status).json({
    error: { message: error.message }
  })

  // Respond to ourselves
  console.log(err)
})

// Start the server
const PORT = app.get('port') || 3000
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`))