const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");

require("./models/Users");
require("./services/passport");

mongoose
  .connect(keys.mongoURI)
  .then(() => console.log("連接成功"))
  .catch(() => console.log("連接失敗"));

const app = express();

app.use(
  cookieSession({
    //希望cookie可以持續30天的意思
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

//呼叫passport使用cookie 來處理驗證, 初始化Passport並設定Session
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("正在聆聽4000port"));
