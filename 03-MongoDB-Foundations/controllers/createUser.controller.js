import User from "../models/User.model.js"

export const createUser = async () => {
    try {
        let { name, age, email, userName } = req.body
        const user = await User.create({
            name,
            age,
            email,
            userName
        })
        res.status(201).json({ message: "User Created" })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}