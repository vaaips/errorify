const errors = require('./errors')

const errorify = (req, res, next) => {
  res.error = (status = 500, message) => {
    var error = errors[status]
    if (!error) {
      status = 500
      error = errors[status]
    }
    if (message) error.message = message
    res.status(status).json(error)
  }
  next()
}

module.exports = errorify
