const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')

const db = require('../db')

router.get('/:accountId', auth, function (req, res) {
  db.transactions.find(req.user.id, Number(req.params.accountId))
    .then(transactions => {
      res.json(transactions.map(tx => ({
        id: tx.id,
        date: tx.date,
        description: tx.description,
        inAccountId: tx.in_account_id,
        outAccountId: tx.out_account_id,
        amount: tx.amount
      })))
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.put('/:transactionId', auth, function (req, res) {
  db.transactions.update(Number(req.params.transactionId), req.body)
    .then(transactions => {
      res.json(transactions.map(tx => ({
        id: tx.id,
        date: tx.date,
        description: tx.description,
        inAccountId: tx.in_account_id,
        outAccountId: tx.out_account_id,
        amount: tx.amount
      })))
    })
    .catch(error => {
      res.status(500).json(error)
    })
})


module.exports = router
