const axios = require("axios");
const db = require("../../config/db");

module.exports = async (req, res) => {
  try {
    console.log(req.body.accessToken);
    const data = await axios.post(
      `https://kapi.kakao.com/v1/user/logout`,
      null,
      {
        headers: {
          Authorization: `Bearer ${req.body.accessToken}`,
        },
      }
    );
    console.log(data.data);
  } catch (e) {
    console.log(e);
  }
};
