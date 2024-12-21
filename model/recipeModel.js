// import the module mongoose
const mongoose = require("mongoose");

// define the schema for recipe
const recipeSchema = new mongoose.Schema({
    
    recipe_name: {
        type: String, required: true
    },

    ingredients: { 
        type: [String], required: true 
    },

    instructions: { 
        type: String, required: true 
    },

    cuisine: { 
        type: String, required: true 
    },

    created_date: {
        type: Date, default: Date.now
    }
})

// create the recipe modele from schema
const Recipe = mongoose.model("Recipe", recipeSchema);

// exports the model
module.exports = Recipe;