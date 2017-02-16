const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/api/accounts/:accountId/transactions', function (req, res) {

  const total = Math.floor(Math.random()*20)
  const data = []
  for(let i = 0; i < total; i++) {
    data.push({
      id: i.toString(),
      description: 'item ' + i,
      inAccountId: Math.random() > 0.5 ? i.toString() : Math.floor(Math.random()*10).toString(),
      outAccountId: Math.random() > 0.5 ? i.toString() : Math.floor(Math.random()*10).toString(),
      amount: Math.floor(Math.random()*10000)
    })
  }
  res.json(data)
})


module.exports = router
