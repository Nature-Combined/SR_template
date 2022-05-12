const db = require("../../config/db");
const fs = require("fs");

module.exports = (req, res) => {
  const sql = `SELECT * FROM user_info WHERE ID = ?`;
  const params = [req.body.id];

  db.query(sql, params, (err, result) => {
    try {
      if (err) console.log(err);
      else if (
        result[0].profile_image !==
        "profile_uploads" + "\\" + "profile.png"
      ) {
        fs.unlinkSync(result[0].profile_image);
      }
    } catch (e) {
      console.log(e);
    }
  });

  const sql2 = `UPDATE user_info SET profile_image = ? WHERE id = ?`;
  const params2 = [req.file.path, req.body.id];

  db.query(sql2, params2, (err, result) => {
    try {
      if (err) console.log(err);
      else res.status(200).send("ok");
    } catch (e) {
      console.log(e);
    }
  });
};
