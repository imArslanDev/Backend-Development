import User from "../models/User.model.js"

export const updateUser = async (req, res) => {
    try {
        const { name, age } = req.body
        const id = req.params.id
        const user = await User.findByIdAndUpdate(id, { name, age }, {returnDocument: "after"})
        return res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ message: error })
    }
}