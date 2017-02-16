const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/accounts', function (req, res) {
  res.json([{
    "id": "0",
    "name": "Expenses",
    "amount": 100000
   },
   {
    "id": "1",
    "name": "Entertainment",
    "parentId": "0",
    "amount": 80000
   },
   {
    "id": "2",
    "name": "Restaurants",
    "parentId": "1",
    "amount": 60000
   },
   {
    "id": "3",
    "name": "Coffee",
    "parentId": "1",
    "amount": 20000
   },
   {
    "id": "4",
    "name": "Car",
    "parentId": "0",
    "amount": 20000
   },
   {
    "id": "5",
    "name": "Income",
    "amount": 200000
   },
   {
    "id": "6",
    "name": "Salary",
    "parentId": "5",
    "amount": 100000
   },
   {
    "id": "7",
    "name": "Gas",
    "parentId": "4",
    "amount": 5000
   }
  ])
})

module.exports = router
