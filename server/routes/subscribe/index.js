const express = require('express')
const router = express.Router()

const subscribeRegister = require('./subscribeRegister.js')
const subscribeDel = require('./subscribeDel.js')
const subscribeList = require('./subscribeList.js')

router.post('/subscribeRegister', subscribeRegister)
router.get('/subscribeDel', subscribeDel)
router.post('/subscribeList', subscribeList)

module.exports = router
