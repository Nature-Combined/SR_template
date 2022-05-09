const express = require('express')
const router = express.Router()

// const notice = require('./notice.js')
// const noticeList = require('./noticeList.js')
// const noticeChange = require('./noticeChange.js')
// const noticeDel = require('./noticeDel.js')
const myInfo = require('./myInfo.js')

router.post('/myInfo', myInfo)
// router.get('/noticeList', noticeList)
// router.post('/notice/change', noticeChange)
// router.get('/notice/del', noticeDel)

module.exports = router
