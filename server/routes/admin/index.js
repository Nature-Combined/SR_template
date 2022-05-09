const express = require("express");
const router = express.Router();

//notices
const notice = require("./notices/notice.js");
const noticeList = require("./notices/noticeList.js");
const noticeChange = require("./notices/noticeChange.js");
const noticeDel = require("./notices/noticeDel.js");

//category
const category = require("./category/category.js");
const categoryList = require("./category/categoryList.js");
const categoryChange = require("./category/categoryChange.js");
const categoryDel = require("./category/categoryDel.js");

//notices
router.post("/notice", notice);
router.get("/noticeList", noticeList);
router.post("/notice/change", noticeChange);
router.get("/notice/del", noticeDel);

//category
router.post("/category", category);
router.get("/category", categoryList);
router.post("/category/change", categoryChange);
router.get("/category/del", categoryDel);

module.exports = router;
