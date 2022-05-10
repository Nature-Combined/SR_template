const db = require('../../config/db')

module.exports = (req, res) => {
  // console.log('이것은', req.body.user)
  const sql = `SELECT * FROM user_info WHERE user_id = ?`
  const params = [req.body.user]
  db.query(sql, params, (err, result) => {
    try {
      if (err) {
        res.status(400).send('사용자가 없습니다.')
      } else {
        res.status(200).send({ result })
      }
    } catch (e) {
      console.log(e)
    }
  })
}
