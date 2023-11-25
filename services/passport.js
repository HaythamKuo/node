const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

//這裡是從Users.js取出的參數 所以第二個參數可以省略
const User = mongoose.model("Users");

//第一個參數是user model(從資料庫取出的instance) 第二個是已完成的參數
passport.serializeUser(
  (user, done) => {
    //console.log("這是使用者:" + user);
    done(null, user.id);
  }

  //這裡的user.id是mongo幫我創建的id
);

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => done(null, user))
    .catch((err) => done(err, null));
});

/**
 * new google strategy創建一個新的instance of google passport strategy
 * 意思是透過某種方式來對用戶進行驗證(在函式內部會客製configuration)
 * passport.use意思是告訴passport有一個新的strategy可以用
 */

passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id }).exec();

      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
