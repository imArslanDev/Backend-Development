import User from "../models/User.model.js"

export const readSingleUser =  async (req, res) => {
    try {
        const users = await User.findOne({ userName: req.params.userName })
        return res.status(200).json(users)
    } catch (error) {
        return res.status(400).json({ message: error })
    }
}