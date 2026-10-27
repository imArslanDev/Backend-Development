import User from "../models/User.model.js"

export const findUser = async (req, res) => {
    try {
        // const users = await User.find({age: {$gte: 22}})
        const users = await User.find({ age: { $not: { $lt: 30 } } })
        return res.status(200).json(users)
    } catch (error) {
        return res.status(400).json({ message: error })
    }
}