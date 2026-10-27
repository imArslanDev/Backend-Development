import User from "../models/User.model.js"

export const readAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(400).json({ message: error })
    }
}
