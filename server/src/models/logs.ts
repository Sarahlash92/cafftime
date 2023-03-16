import mongoose from "../models/index";
const Schema = mongoose.Schema;

const logSchema = new Schema({
  id: String,
  name: String,
  baseAmount: Number,
  caffeine: Number,
  timestamp: Date,
});

const Log = mongoose.model("log", logSchema);

export default Log;

