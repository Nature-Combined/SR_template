const db = require("../../../config/db");

module.exports = (req, res) => {
  const sql = `INSERT INTO category VALUES(null, ?)`;
  const params = [req.body.category];
  db.query(sql, params, (err, result) => {
    try {
      if (err) console.log(err);
      else res.status(200).send("ok");
    } catch (e) {
      console.log(e);
    }
  });
};
