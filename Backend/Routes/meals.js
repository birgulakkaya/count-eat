const express = require("express");
const router = express.Router();
const Recipe = require("../Models/Recipe.js");

router.get("/", async (req, res) => {
  const { calories, meals, genre } = req.query;
  const maxCalories = parseInt(calories, 10) + 30;

  try {
    let allRecipes;
    if (genre === "normal") {
      // "Normal" seçeneği seçildiğinde tüm tarifleri alıyoruz
      allRecipes = await Recipe.find({});
    } else {
      // Belirtilen genre'ye göre tarifleri alıyoruz
      allRecipes = await Recipe.find({ Genre: genre });
    }

    const selectedRecipes = [];
    let totalCalories = 0;

    while (totalCalories < maxCalories) {
      const randomIndex = Math.floor(Math.random() * allRecipes.length);
      const selectedRecipe = allRecipes[randomIndex];

      const doubledCalories = selectedRecipe.Calorie * 2;

      if (totalCalories + doubledCalories <= maxCalories) {
        // Kalori değeri iki katına çıkarılmış olarak yeni bir nesne oluşturup diziye ekliyoruz
        const updatedRecipe = {
          ...selectedRecipe.toObject(),
          Calorie: doubledCalories,
        };
        selectedRecipes.push(updatedRecipe);
        totalCalories += doubledCalories;
      } else {
        break;
      }
    }

    const mealsArray = Array.from({ length: meals }, () => []);
    for (let i = 0; i < selectedRecipes.length; i++) {
      mealsArray[i % meals].push(selectedRecipes[i]);
    }

    res.status(200).json(mealsArray);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Server Error" });
  }
});

module.exports = router;
