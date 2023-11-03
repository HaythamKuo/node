const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchma = new Schema({
  googleId: String,
});

mongoose.model("Users", userSchma);
