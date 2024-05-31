const mongoose = require("mongoose");

const RecipeSchema = mongoose.Schema({
  id: { type: Number, required: true },
  CategoryBread: { type: String, required: true },
  Cuisine: { type: String, required: true },
  img: { type: String, required: true },
  IngridientNames: { type: String, required: true },
  Ingridients: { type: String, required: true },
  Keywords: { type: String, required: true },
  MainCategory: { type: String, required: true },
  Turkish_Name: { type: String, required: true },
  PrepDetails: { type: String, required: true },
  RecipeDetails: { type: String, required: true },
  ShortDescription: { type: String, required: true },
  Calorie: { type: Number, required: true },
  Carbohydrates: { type: Number, required: true },
  Cholesterol: { type: Number, required: true },
  Fat: { type: Number, required: true },
  Fiber: { type: Number, required: true },
  Potassium: { type: Number, required: true },
  Protein: { type: Number, required: true },
  Saturated_Fat: { type: Number, required: true },
  Serving_Size: { type: Number, required: true },
  Sodium: { type: Number, required: true },
  Sugar: { type: Number, required: true },
  Genre: { type: Array, required: true },
});

const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;
