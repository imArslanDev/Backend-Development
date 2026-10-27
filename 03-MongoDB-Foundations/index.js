import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import userRouter from "./routes/user.routes.js";

dotenv.config()
const PORT = process.env.PORT || 5000
const app = express()

// Middleware
app.use(express.json())
app.use("/api", userRouter)


// App Listening
app.listen(PORT, () => {
    connectDB()
    console.log(`App is Listening on PORT:${PORT}`)
})