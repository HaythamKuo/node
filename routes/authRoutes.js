const passport = require("passport");

function checkLoggedIn(req, res, next) {
  const isLogined = req.isAuthenticated() && req.user;
  if (!isLogined) {
    return res.status(401).json({
      message: "未登入",
    });
  }
  next();
}

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

  // app.get("/surveys", checkLoggedIn, (req, res) => {
  //   res.send("這是一個需要登入的路由");
  // });

  // app.get(
  //   "/auth/google/callback",
  //   passport.authenticate("google"),
  //   (req, res) => {
  //     res.redirect("/surveys");
  //   }
  // );

  app.get(
    "/auth/google/callback",
    passport.authenticate(
      "google",
      {
        failureRedirect: "/",
      },
      (req, res) => {
        // res.redirect("/surveys");
        res.redirect("/surveys");
      }
    )
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
