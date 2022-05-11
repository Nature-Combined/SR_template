const db = require('../../config/db')
const moment = require('moment')

module.exports = async (req, res) => {
  // console.log('구독하기')
  const created_date = moment().format('YYYY-MM-DD hh:mm:ss')
  let params = [req.body.id, req.body.user, req.body.subject, created_date]
  let searchParams = [req.body.user, req.body.subject]
  db.query(`SELECT * FROM subscription where user_id = ? and sub_name = ?`, searchParams, (err, result) => {
    try {
      if (!result.length) {
        res.status(200).send('ok')
      } else {
        res.status(200).send('no')
      }
    } catch (e) {
      console.log(e)
    }
  })
}
