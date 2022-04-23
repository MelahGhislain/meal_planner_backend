const mongoose = require('mongoose')
const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    duration:{
        type: String,
    },
    video:{
        type: String,
    },
    recipe:{
        type:[String]
    },
    missedIngredientCount:{
        type: Number,
    },
    missedIngredient: {
        type: [String]
    },
    usedIngredientCount: {
        type: Number
    },
    usedIngredient:{
        typee: [String]
    },
})

module.exports = mongoose.model('recipe', recipeSchema)