const axios = require("axios");
const db = require("../../config/db");

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

    const sql = `SELECT * FROM user WHERE sns_id = ? AND sns = "kakao" limit = 1`;
    const params = [userInfo.data.id];
    db.query(sql, params, (err, result) => {
      console.log(result);
      if (!result) {
      }
    });
    res.status(200).send({ ...userInfo.data, accessToken });
  } catch (err) {
    console.log(err);
    return res.status(400);
  }
};
