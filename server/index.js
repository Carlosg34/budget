const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const config = require('./config')

const usersController = require('./controllers/users')
const accountsController = require('./controllers/accounts')
const transactionsController = require('./controllers/transactions')
const infoController = require('./controllers/info')

const app = express()

app.use(bodyParser.json())

// console.log('initializing db')
//
// db.init()
//   .then(() => {
//     console.log('finished initializing db')
//     db.users.find()
//     // db.seed()
//   })

// db.testConnection()

app.use('/users', usersController)
app.use('/accounts', accountsController)
app.use('/transactions', transactionsController)
app.use('/info', infoController)

app.use(function(error, req, res, next) {
  if (error) {
    if (error instanceof SyntaxError) {
      res.status(400).json({
        code: 'invalidJson',
        message: 'Invalid JSON Body'
      })
      return
    }
  }
  next()
})

app.all('*', function(req, res) {
  res.status(404).json({error: 'path not found'})
})

app.listen(config.PORT, function (err) {
  if (err) {
    return console.error(err)
  }

  console.log('Server listening at http://localhost:3001/')
})
