const passport = require("passport");

/**
 * 這段程式碼是要讓使用者進入google的OAuth(由passport管理)
 */
module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });
  app.get("/api/current_user", (req, res) => {
    console.log(`這個是req.user ....${req.user}`);
    res.send(req.user);
  });
};
