import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

//Import routes
import postRoutes from './routes/posts.js'

const app = express()

//Add dotenv constants
dotenv.config()

//Express middleware uses & sets
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

//set PORT
const PORT = process.env.PORT || 5000

//Setup routes
app.use('/posts', postRoutes)

//mongodb connect
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`))) //Run application
    .catch((error) => console.log(error.message))