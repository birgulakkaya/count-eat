const express = require("express");
const router = express.Router();

// Route imports
const ingredientRoute = require("./ingredients.js");
const recipeRoute = require("./recipes.js");
const mealRoute = require("./meals.js");
const blogRoute = require("./blogs.js");

// Use routes
router.use("/ingredients", ingredientRoute);
router.use("/recipes", recipeRoute);
router.use("/meals", mealRoute);
router.use("/blogs", blogRoute);

module.exports = router;
