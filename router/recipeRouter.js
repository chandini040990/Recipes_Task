const express = require('express');

const router = express.Router();

//import the controller
const recipeController = require("../controllers/recipeController")

//router to get all,get by id,post,update,delete the recipes
router.get('/', recipeController.getAllRecipes);
router.get('/:id', recipeController.getRecipeById);
router.post("/", recipeController.createRecipe);
router.put('/:id', recipeController.updateRecipe);
router.delete("/:id", recipeController.deleteRecipe)

module.exports = router;