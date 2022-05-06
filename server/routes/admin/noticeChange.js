const db = require("../../config/db");

module.exports = (req, res) => {
  const sql = `UPDATE notices SET contents = ? WHERE id = ?`;
  const params = [req.body.contents, req.body.id];

  db.query(sql, params, (err, result) => {
    try {
      if (err) console.log(err);
      else res.status(200).send({ result });
    } catch (e) {
      console.log(e);
    }
  });
};
