const db = require("../../../config/db");

module.exports = (req, res) => {
  const sql = `SELECT * FROM notices ORDER BY id desc`;
  db.query(sql, (err, result) => {
    try {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send({ result });
      }
    } catch (e) {
      console.log(e);
    }
  });
};
