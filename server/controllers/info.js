const express = require('express')
const router = express.Router()

const codes = require('../codes')

router.get('/codes', function (req, res) {
  return res.json(
    Object.keys(codes).map(code => codes[code])
  )
})

module.exports = router
