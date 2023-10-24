const express = require("express");
require("./services/passport");

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("正在聆聽4000port"));
