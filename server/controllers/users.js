const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const db = require('../db')
const config = require('../config')
const codes = require('../codes')

const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')

const router = express.Router()

router.get('/', function(req, res) {
  db.users.findAll()
    .then(users => {
      res.json(users)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.get('/:username', function(req, res) {
  db.users.findByUsername(req.params.username)
    .then(user => {
      res.json(user)
    })
    .catch(error => {
      if (error.name === 'QueryResultError') {
        res.status(404).json({error: 'Not found'})
      } else {
        res.status(500).json(error)
      }
    })
})

router.post('/login', function(req, res) {

  const validate = new Promise((resolve) => {
    if(!req.body.password) {
      throw codes.missingPassword
    } else if(!req.body.username) {
      throw codes.missingUsername
    } else {
      resolve()
    }
  })

  let foundUser

  validate
    // Find user in the DB
    .then(() => db.users.findByUsername(req.body.username))
    // Compare password
    .then(user => {
      foundUser = user
      return bcrypt.compare(req.body.password, user.password)
    })
    .then(isMatch => {
      if (isMatch) {
        // Sign JWT
        var token = jwt.sign({id: foundUser.id, username: foundUser.username, role: foundUser.role},
         config.JWT_SECRET, {
         expiresIn: config.JWT_EXPIRY
        })
        return res.json({token: token})
      } else {
        throw codes.incorrectLogin
      }
    })
    .catch(error => {
      console.log(error)
      return res.status(error.status || 500).json(error)
    })
})

router.post('/', function(req, res) {

  const validate = new Promise((resolve) => {
    if(!req.body.username) {
      throw codes.missingUsername
    } else if(req.body.username.length < 3 || req.body.username.length > 10) {
      throw codes.usernameLength
    } else if(!req.body.password) {
      throw codes.missingPassword
    } else if(req.body.password.length < 8 || req.body.password.length > 30) {
      throw codes.passwordLength
    } else if(!req.body.email) {
      throw codes.missingEmail
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test(req.body.email)) {
      throw codes.invalidEmail
    } else {
      resolve()
    }
  })

  validate
    .then(() => {
      // Find existing username or email
      return db.users.findByUsernameOrEmail(req.body.username, req.body.email)
    })
    .then(users => {
      if(users.length > 0) {
        if(users[0].username.toLowerCase() === req.body.username.toLowerCase()) {
          throw codes.duplicateUsername
        } else {
          throw codes.duplicateEmail
        }
      } else {
        return bcrypt.hash(req.body.password, config.BCRYPT_SALT_ROUNDS)
      }
    })
    .then(hash => {
      // create user in the database
      return db.users.create({
        username: req.body.username,
        password: hash,
        email: req.body.email,
        role: 'user'
      })
    })
    .then(user => {
      // sign JWT and return successful response
      var token = jwt.sign(
        {id: user.id, username: req.body.username, role: 'user'},
        config.JWT_SECRET,
        {expiresIn: config.JWT_EXPIRY}
      )
      return res.json({token: token})
    })
    .catch(error => {
      // if(error) {
      //   // if(error.code === 'ECONNREFUSED') {
      //   //
      //   // }
      //
      // }
      return res.status(error.status || 500).json(error)
    })
})

// Update user
router.put('/:id', auth, function(req, res) {
  if (Number(req.params.id) === req.user.id  || req.user.role === 'admin') {
    db.users.edit({
      id: Number(req.params.id),
      email: req.body.email,
      password: req.body.password
    }).then(() => {
      return res.json('success')
    }).catch(error => {
      return res.state(500).json(error)
    })
  } else {
    const error = codes.notAuthorized
    return res.status(error.status || 500).json(error)
  }
})

// Delete account
router.delete('/:id', auth, function(req, res) {
  if (Number(req.params.id) === req.user.id || req.user.role === 'admin') {
      db.users.remove(Number(req.params.id))
        .then(result => {
          if (result.rowCount > 0) {
            return res.json('success')
          } else {
            const error = codes.notFound
            return res.status(error.status || 500).json(error)
          }
        })
        .catch(error => {
          return res.status(500).json(error)
        })
  } else {
    const error = codes.notAuthorized
    return res.status(error.status || 500).json(error)
  }
})

module.exports = router
