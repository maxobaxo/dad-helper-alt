var mongoose = require("mongoose");
var GameSchema = new mongoose.Schema({
  name: String,
  description: String,
  bonus: String
});
mongoose.model("Game", GameSchema);

module.exports = mongoose.model("Game");
