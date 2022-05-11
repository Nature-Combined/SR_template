const db = require('../../config/db')
const moment = require('moment')
const e = require('express')

module.exports = async (req, res) => {
  console.log('카운트')
  console.log(req.query.user)
  if (req.query.type === 0) {
    try {
      db.query(`SELECT * FROM subscript_count where user_id = ? `, req.query.user, (err, result) => {
        if (!result.length) {
          let searchCountParams = [req.query.user, 1]
          db.query(`INSERT INTO subscript_count (user_id,subscription_count) VALUES (?,?)`, searchCountParams, (err, result) => {
            res.status(200).send('ok')
          })
        } else {
          db.query(
            `UPDATE subscript_count SET subscription_count =  subscription_count + 1 where user_id = ? `,
            req.query.user,
            (err, result) => {
              res.status(200).send('ok')
            }
          )
        }
      })
    } catch (e) {}
  } else if (req.query.type === 1) {
    db.query(
      `UPDATE subscript_count SET subscription_count =  subscription_count - 1 where user_id = ? `,
      req.query.user,
      (err, result) => {
        res.status(200).send('ok')
      }
    )
  }
}
