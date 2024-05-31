const express = require("express");
const router = express.Router();
const Ingredient = require("../Models/Ingredient.js");

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
    const ingredients = await Ingredient.find(filter);
    res.status(200).json(ingredients);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Server Error" });
  }
});

module.exports = router;
