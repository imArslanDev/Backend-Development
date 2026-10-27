import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI) 
        console.log("DB Connected")
    } catch (error) {
        console.log("DB Connection Failed:", error)
        
    }
}

export default connectDB