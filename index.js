const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const cors = require("cors");

require("./models/Users");
require("./services/passport");

mongoose
  .connect(keys.mongoURI)
  .then(() => console.log("連接devDB成功"))
  .catch((err) => console.error("連接失敗", err));

const app = express();

////////////////////////////////////////////////////////////
//希望cookie可以持續30天的意思
app.use(
  cookieSession({
    name: "session",
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

//呼叫passport使用cookie 來處理驗證, 初始化Passport並設定Session
app.use(passport.initialize());
app.use(passport.session());
////////////////////////////////////////////////////////////

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`正在聆聽${PORT}port`));
