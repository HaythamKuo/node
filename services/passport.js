const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

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
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log(refreshToken);
      console.log(profile);
    }
  )
);
