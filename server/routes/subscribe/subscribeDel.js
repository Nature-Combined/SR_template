const db = require('../../config/db')

module.exports = (req, res) => {
  // console.log(req.query.user)
  // console.log(req.query.subject)
  let params = [req.query.user, req.query.subject]
  const sql = `DELETE FROM subscription where user_id = ? and sub_name = ?`
  db.query(sql, params, (err, result) => {
    try {
      if (err) {
        res.status(400).send('사용자가 없습니다.')
      } else {
        res.status(200).send('ok')
        db.query(
          `UPDATE subscript_count SET subscription_count =  subscription_count  1 where user_id = ? `,
          req.query.subject,
          (err, result) => {
            res.status(200).send('ok')
          }
        )
      }
    } catch (e) {
      console.log(e)
    }
  })
}
