const db = require('../../config/db')
const moment = require('moment')

module.exports = async (req, res) => {
  console.log('구독하기')
  const created_date = moment().format('YYYY-MM-DD hh:mm:ss')
  let params = [req.body.id, req.body.user, req.body.subject, created_date]
  let searchParams = [req.body.user, req.body.subject]
  const sql = `INSERT INTO subscription (user_info_id,user_id,sub_name,create_date) VALUES (?,?,?,?)`
  db.query(`SELECT * FROM subscription where user_id = ? and sub_name = ?`, searchParams, (err, result) => {
    try {
      if (!result.length) {
        db.query(sql, params, (err, result) => {
          if (err) {
            console.log(err)
          } else {
            res.status(200).send('ok')
          }
        })
      } else {
        res.status(400).send('중복된 사용자가 있습니다.')
      }
    } catch (e) {
      console.log(e)
    }
  })
}
