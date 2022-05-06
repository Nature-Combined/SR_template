const db = require("../../config/db");
const moment = require("moment");

module.exports = (req, res) => {
  console.log(req.body);
  const created_date = moment().format("YYYY-MM-DD hh:mm:ss");
  console.log(created_date);

  const sql = `INSERT INTO notices (title, contents, created_time, writer) VALUES (?, ?, ?, "관리자")`;
  const params = [req.body.title, req.body.contents, created_date];
  db.query(sql, params, (err, result) => {
    try {
      if (err) {
        console.log(err);
        res.status(400).send("db에 등록할 수 없습니다.");
      } else {
        res.status(200).send("ok");
      }
    } catch (e) {
      console.log(e);
    }
  });
};
