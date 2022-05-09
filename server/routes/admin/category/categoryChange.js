const db = require("../../../config/db");

module.exports = (req, res) => {
  const sql = `UPDATE category SET category_name = ? WHERE id = ?`;
  const params = [req.body.category, req.query.id];
  db.query(sql, params, (err, result) => {
    try {
      if (err) console.log(err);
      else res.status(200).send("ok");
    } catch (e) {
      console.log(e);
    }
  });
};
