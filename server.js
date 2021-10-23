const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()

const port = '2433'

app.use(cors())
app.get('/', async (req, res) => {
    const { data } = await axios('https://jsonplaceholder.typicode.com/users')
    
    
    return res.json(data)
    
})

app.listen(port, () => {
    console.log(`listen at port ${port} in server.js`)
})