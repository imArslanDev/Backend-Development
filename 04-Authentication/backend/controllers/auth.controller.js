import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import generateToken from "../config/token.js";

export const signup = async (req, res) => {
    try {
        const {firstName, lastName, userName, email, password} = req.body

        if(!firstName || !lastName || !userName || !email || !password) {
            return res.status(400).json({message: "Fill All Details"})
        }

        // Check if user already exist
        let userExist = await User.findOne({email})
        if(userExist) {
            return res.status(400).json({message: "User Already exist"})
        }
        
        // Hash Pasword
        const hashedPassword = await bcrypt.hash(password, 10)

        // Create User
        const user = await User.create({firstName, lastName, userName, email, password:hashedPassword}) 

        let token;
        try {
            token = generateToken(user._id)
        } catch (error) {
            console.log("Token Err: ", error)
            
        }

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENVIROMENT == "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 Days in Milli Seconds
        })
        
        return res.status(201).json({users: {firstName, lastName, userName, email}})

    } catch (error) {
        return res.status(500).json({message:"Internal Server Error"})        
    }
}