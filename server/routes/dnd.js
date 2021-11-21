const express = require('express')
const request = require('superagent')

const router = express.Router()

const baseURL = 'https://www.dnd5eapi.co/api'

router.get('/', (req, res) => {
  return request.get(baseURL)
    .then(response => {
      return res.json(response.body)
    })
})

module.exports = router
