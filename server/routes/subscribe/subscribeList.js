const db = require('../../config/db')

module.exports = (req, res) => {
  // console.log('구독 이것은', req.body.user)
  let params = [req.body.user]
  //@pcw 나를 구독한 사람의 리스트
  if (req.body.type === 'subscribeToMe') {
    const sql = `SELECT * FROM subscription where sub_name = ?`
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
    //@pcw 내가 구독한 사람의 리스트
  } else {
    const sql = `SELECT * FROM subscription where user_id = ?`
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
}
