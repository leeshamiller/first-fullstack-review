const express = require('express')
const massive = require('massive')
require('dotenv').config()
const pc = require('./product_controller')
const {PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

app.get('/api/products', pc.getAll)
app.post('/api/product', pc.createItem)
app.put('/api/product/:id', pc.updateItem)
app.delete('/api/product/:id', pc.deleteItem)

massive(CONNECTION_STRING).then(connection => {
    app.set('db', connection)
    app.listen(PORT, () => console.log(`listening on port ${PORT}`))
}).catch(err => console.log(err))



