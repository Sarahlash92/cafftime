import mongoose from "../models/index";
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  id: String,
  name: String,
  baseAmount: Number,
  caffeine: Number,
  imageUrl: String
});

const Food = mongoose.model("food", FoodSchema);

module.exports = Food
