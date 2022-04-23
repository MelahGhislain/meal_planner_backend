const mongoose = require('mongoose')

const ingredientSchema = new mongoose.Schema({
    image: String,
    name: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('ingredient', ingredientSchema)