const mongoose = require("mongoose");

const IngredientSchema = mongoose.Schema({
  id: { type: Number, required: true },
  Calorie: { type: String, required: true },
  Carbohydrates: { type: String, required: true },
  Cholesterol: { type: String, required: true },
  English_Name: { type: String, required: true },
  Fat: { type: String, required: true },
  Fiber: { type: String, required: true },
  Potassium: { type: String, required: true },
  Protein: { type: String, required: true },
  Saturated_Fat: { type: String, required: true },
  Serving_Size: { type: String, required: true },
  Sodium: { type: String, required: true },
  Sugar: { type: String, required: true },
  img: { type: String, required: true },
  Turkish_Name: { type: String, required: true },
});

const Ingredient = mongoose.model("Ingredient", IngredientSchema);
module.exports = Ingredient;
