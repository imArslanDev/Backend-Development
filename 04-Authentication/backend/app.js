import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.route.js";

dotenv.config()
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use("/api", authRouter)


app.listen(PORT, () => {
    connectDB()
    console.log(`App is Listening on PORT:${PORT}`)
})