const express = require("express");
const router = express.Router();

const myInfo = require("./myInfo.js");
const changeMyColor = require("./changeMyColor.js");
const myProfile = require("./myProfile.js");
// const subscribe = require('../subscribe/subscribeList.js')
// const subscribeDel = require('../subscribe/subscribeDel.js')

router.post("/myInfo", myInfo);
router.get("/mycolor", changeMyColor);
router.post("/myprofile", myProfile);
// router.post('/subscribe', subscribe)
// router.get('/subscribeDel', subscribeDel)

module.exports = router;
