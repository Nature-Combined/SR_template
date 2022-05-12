const express = require("express");
const router = express.Router();

const kakao = require("./kakao.js");
const kakaoLogout = require("./kakaoLogout.js");

router.post("/kakao", kakao);
router.post("/kakao/logout", kakaoLogout);

module.exports = router;
