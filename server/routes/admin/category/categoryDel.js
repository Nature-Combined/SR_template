const db = require("../../../config/db");

module.exports = (req, res) => {
  const sql = `DELETE FROM category where id = ?`;
  const params = [req.query.id];
  db.query(sql, params, (err, result) => {
    try {
      if (err) console.log(err);
      else res.status(200).send("ok");
    } catch (e) {
      console.log(e);
    }
  });
};
