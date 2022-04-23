const express = require('express')
require('dotenv').config()
const cors = require('cors')
const config = require('config')
const routes = require('./routes')

const app = express()

app.use(cors({origin: true}))
app.use(express.json())

const port = config.get('port')

app.use('/api/v1', routes())

app.listen(port, ()=>console.log(`Server running on port${port}`))