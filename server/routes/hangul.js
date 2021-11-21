const express = require('express')
const request = require('superagent')

const router = express.Router()

const baseURL = ''

router.get('/', (req, res) => {
  return request.get(baseURL)
    .then(response => {
      return res.json(response.body)
    })
})

module.exports = router
