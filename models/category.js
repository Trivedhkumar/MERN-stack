const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      unique: true,
    },
  },
  { timestamp: true }
);
module.exports = mongoose.model("Category", categorySchema);
