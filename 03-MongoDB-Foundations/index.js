import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import User from "./models/User.model.js";

dotenv.config()
const PORT = process.env.PORT
const app = express()

// Middleware
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Home Route")
})


app.post("/create", async (req, res) => {
    try {
        let {name, age, email, userName} = req.body
        User

    } catch (error) {
        
    }
})

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.Mongo_URI)
        console.log("DB Connected")
    } catch (error) {
        console.log("DB Connection Error:", error)
    }
}

app.listen(PORT, () => {
    connectDB()
    console.log(`App is Listening on PORT:${PORT}`)
})