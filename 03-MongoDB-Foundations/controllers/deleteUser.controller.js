import User from "../models/User.model.js"

export const deleteUser = async (req, res) => {
    try {
        let id = req.params.id
        let user = await User.findByIdAndDelete(id)
        return res.status(200).json(user)
    } catch (error) {
        res.status(400).json({message:error})
    }
}