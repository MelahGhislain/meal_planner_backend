const router = require('express').Router()

module.exports = ()=>{
    router.get('/', (req, res)=>{
        res.send("recipies")
    })
    router.get('/:id', (req, res)=>{
        res.send('recipe of id' + id)
    })

    return router
}