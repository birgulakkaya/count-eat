const express = require("express");
const router = express.Router();
const Recipe = require("../Models/Recipe.js");

//! Get (Read All or by Ingredient) and Dynamic Search

router.get("/", async (req, res) => {
  const category = req.query.category;
  const search = req.query.search;
  let filter = {};
  if (category) {
    filter.MainCategory = category;
  }
  if (search) {
    filter.Turkish_Name = { $regex: search, $options: "i" };
  }
  try {
    const recipes = await Recipe.find(filter);
    res.status(200).json(recipes);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Server Error" });
  }
});

//! Get Single Recipe
router.get("/:recipeId", async (req, res) => {
  try {
    const recipeId = req.params.recipeId;
    const recipe = await Recipe.findById(recipeId);

    if (!recipe) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(recipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
