const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;
const http = require("http");
const server = http.createServer(app);
const mysql = require("mysql2");
// const multer = require("multer");

const { config } = require("dotenv"); // dotenv
config(); // dotenv

//multer 스토리지
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); //경로 지정 콜백함수
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname); //파일명 지정 콜백함수
//   },
// });

// const upload = multer({ storage: storage });

app.use("/uploads", express.static("uploads"));
app.use(express.json()); //용량제한
app.use(express.urlencoded());
app.use(
  cors({
    origin: true, //실제서버주소로 변경
    credentials: true,
  })
);

app.use("/admin", require("./routes/admin"));
app.use("/oauth", require("./routes/oauth"));

server.listen(PORT, "0.0.0.0", () =>
  console.log(`server is now running on ${process.env.PORT}`)
);
