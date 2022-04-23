const router = require('express').Router()
const recipeRoutes = require('./recipe.routes')
const mealPlannerRoutes = require('./mealplanner.routes')

module.exports = ()=> {
    router.use('/recipes', recipeRoutes())
    router.use('/mealplanner', mealPlannerRoutes())
    return router
}