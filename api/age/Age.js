var mongoose = require("mongoose");
var AgeSchema = new mongoose.Schema({
  range: String,
  skillIds: Array
});

mongoose.model("Age", AgeSchema);

module.exports = mongoose.model("Age");
