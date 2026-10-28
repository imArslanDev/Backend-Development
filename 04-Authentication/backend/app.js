import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

dotenv.config()
const PORT = process.env.PORT || 3000

const app = express()


app.use(express.json())
app.use(cookieParser())
app.use("/api", authRouter)


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT:${PORT}`);
    });
}).catch((err) => {
    console.log("Database connection failed:", err);
});