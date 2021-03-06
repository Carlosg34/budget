var jwt = require('jsonwebtoken')
var config = require('../config')
const codes = require('../codes')

function auth(req, res, next) {

  var token = req.headers['authorization']
  if(token) {
    token = token.replace('Bearer ', '')

    // verifies secret and checks exp
    jwt.verify(token, config.JWT_SECRET, function(err, decoded) {
      if (err) {
        return res.status(401).json({code: err.name, message: err.message })
      } else {
        req.user = {id: decoded.id, username: decoded.username, role: decoded.role}
        next()
      }
    })

  } else {
    const error = codes.missingAuthToken
    return res.status(error.status || 500).json(error)
  }
}

module.exports = auth
