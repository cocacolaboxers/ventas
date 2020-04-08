//Handling of routing, app startup and port setup

const express = require('express')
const cors = require('cors');

//Routers
const quickBooks = require('./routers/quickBooksRouter')

const app = express()
const port = process.env.PORT | 3000

app.use(express.json())
app.use(cors())

//Making routers usable
app.use(quickBooks)

app.get('/', (req, res) => res.send('Hello World!'))

//Starting server
app.listen(port, () => {
    console.log('Server listening on port ' + port)
})