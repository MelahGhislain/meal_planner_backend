const router = require('express').Router()

module.exports = ()=>{
    router.get('/week', (req, res)=>{
        res.send('meal planner')
    })
    return router
}