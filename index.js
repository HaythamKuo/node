const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({
    hi: "there",
  });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("正在聆聽4000port");
});
