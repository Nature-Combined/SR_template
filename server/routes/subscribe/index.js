const express = require("express");
const router = express.Router();

const subscribeRegister = require("./subscribeRegister.js");
const subscribeDel = require("./subscribeDel.js");
const subscribeList = require("./subscribeList.js");
const subscribeDuplicateCheck = require("./subscribeDuplicateCheck.js");
const subscribeCount = require("./subscribeCount.js");

router.post("/subscribeRegister", subscribeRegister);
router.get("/subscribeDel", subscribeDel);
router.get("/list", subscribeList);
router.post("/subscribeDuplicateCheck", subscribeDuplicateCheck);
router.get("/subscribeCount", subscribeCount);

module.exports = router;
