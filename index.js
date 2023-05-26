import express from 'express'
import { StatusCodes } from 'http-status-codes'
import 'dotenv/config'
import { connectDb } from './src/db/DbConfig.js'
import ProductRouter from './src/routers/ProductRouter.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(ProductRouter)
app.use(express.urlencoded({ extended: false }))
app.use('/public',express.static('public'))

app.listen(5000,()=>{
    connectDb()
    console.log(`server is running on port 5000`)
})