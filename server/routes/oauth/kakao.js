const axios = require("axios");
const db = require("../../config/db");
const moment = require("moment");

module.exports = async (req, res) => {
  const url = new URL("https://kauth.kakao.com/oauth/token");

  url.searchParams.append("grant_type", "authorization_code");
  url.searchParams.append("client_id", process.env.KAKAO_CLIENT_ID);
  url.searchParams.append("redirect_uri", process.env.KAKAO_REDIRECT_URI);
  url.searchParams.append("code", req.body.code);
  let accessToken;

  try {
    const tokenInfo = await axios.post(url.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });

    accessToken = tokenInfo.data.access_token;
    let userInfo = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
    const created_date = moment().format("YYYY-MM-DD hh:mm:ss");
    const sql = `SELECT * FROM user_info WHERE sns_id = ? limit 1`;
    const params = [userInfo.data.id];

    const email = userInfo.data.kakao_account.email;
    const sns_id = userInfo.data.id;
    const insertParams = [
      created_date,
      email,
      sns_id,
      "profile_uploads" + "\\" + "profile.png",
    ];

    db.query(sql, params, (err, result, field) => {
      if (err) console.log(err);
      else if (result.length === 0) {
        const insert = `INSERT INTO user_info(created_time,user_id,sns_id,sns_type, color, profile_image) VALUES (?,?,?,"kakao", 'light', ?)`;
        db.query(insert, insertParams, (err, result2) => {
          console.log(result2.insertId);
          const select = `SELECT * FROM user_info WHERE id = ? limit 1`;
          const params = [result2.insertId];
          db.query(select, params, (err, result3) => {
            if (err) console.log(err);
            else res.status(200).send({ result: result3, is_first: true });
          });
        });
      } else {
        res.status(200).send({ result, is_first: false });
      }
    });
    // res.status(200).send({ ...userInfo.data, accessToken });
  } catch (err) {
    console.log(err);
    return res.status(400);
  }
};
