const axios = require("axios");
const db = require("../../config/db");

module.exports = async (req, res) => {
  try {
    // console.log(req.body.accessToken);
    // const data = await axios.post(
    //   `https://kapi.kakao.com/v1/user/logout`,
    //   null,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${req.body.accessToken}`,
    //     },
    //   }
    // );

    const id = req.query.id;
    //is_login 을 false 로 바꿔준다.
    const sql = `UPDATE user_info SET is_login = 'false' WHERE id = ?`;
    const params = [id];
    db.query(sql, params, (err, result) => {
      if (err) console.log(err);
      //update된 정보를 client에 되돌려 준다.
      else {
        const select = `SELECT * FROM user_info WHERE id = ? limit 1`;
        db.query(select, params, (err, data) => {
          if (err) console.log(err);
          else
            res.status(200).send({ result: { ...data[0], is_first: false } });
        });
      }
    });
  } catch (e) {
    console.log(e);
  }
};
