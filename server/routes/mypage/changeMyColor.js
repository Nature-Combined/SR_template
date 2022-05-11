const db = require("../../config/db");

module.exports = (req, res) => {
  const sql = `UPDATE user_info SET color = ? WHERE id = ?`;
  const params = [req.query.color, req.query.id];

  db.query(sql, params, (err, result) => {
    try {
      if (err) console.log(err);
      else res.status(200).send("ok");
    } catch (e) {
      console.log(e);
    }
  });
};
