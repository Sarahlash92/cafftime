const mongoose = require("../models/index");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  dailyLimit: {
    type: Number,
    required: true,
    default: 400
  },

  sleepTreshold: {
    type: Number,
    required: true,
    default: 50
  },

  sleepTime: {
    type: String,
    required: true,
    default: "10PM"
  },
});

module.exports = mongoose.model("User", userSchema);
