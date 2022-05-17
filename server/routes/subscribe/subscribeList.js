const db = require("../../config/db");

module.exports = (req, res) => {
  // console.log('구독 이것은', req.body.user)
  // let params = [req.body.user]
  // //@pcw 나를 구독한 사람의 리스트
  // if (req.body.type === 'subscribeToMe') {
  //   const sql = `SELECT * FROM subscription where sub_name = ?`
  //   db.query(sql, params, (err, result) => {
  //     try {
  //       if (err) {
  //         res.status(400).send('사용자가 없습니다.')
  //       } else {
  //         res.status(200).send({ result })
  //       }
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   })
  //   //@pcw 내가 구독한 사람의 리스트
  // } else {
  //   const sql = `SELECT * FROM subscription where user_id = ?`
  //   db.query(sql, params, (err, result) => {
  //     try {
  //       if (err) {
  //         res.status(400).send('사용자가 없습니다.')
  //       } else {
  //         res.status(200).send({ result })
  //       }
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   })
  // }

  // 구독자 프로필 image, 유저id, 라이브 여부, 라이브 방종시간, 라이브 시청자 수 필요함
  const sql = `SELECT A.id, A.profile_image, A.user_id, A.is_live, A.live_end_time, C.viewer_num FROM user_info A INNER JOIN subscription B ON A.id = B.sub_id LEFT OUTER JOIN ft_live C ON A.id = C.user_info_id WHERE B.user_info_id = ? ORDER BY is_live DESC, viewer_num DESC, live_end_time DESC`;
  const params = [req.query.id];

  db.query(sql, params, (err, result) => {
    if (err) console.log(err);
    else res.status(200).send({ result });
  });
};
