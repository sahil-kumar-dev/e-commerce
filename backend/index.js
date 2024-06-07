import express from 'express'
import connectToDb from './config/db.config.js'
import ProductRouter from './routes/Product.route.js'
import dotenv from 'dotenv'

const server = express()

// Middlewares
server.use(express.json())

dotenv.config()

// Connection to Database
connectToDb()

const PORT = 8080

server.get('/', (req, res) => {
    res.json('Sucess')
})

server.use('/',ProductRouter)

server.listen(PORT, () => {
    console.log(`Server started on PORT - ${PORT}`)
})