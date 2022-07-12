const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", schema);
