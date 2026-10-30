import express from "express"
import { login, logout, signup } from "../controllers/auth.controller.js"
import { multerUpload } from "../middlewares/multer.middleware.js"

const authRouter = express.Router()

authRouter.post("/signup", multerUpload.single("profileImage"), signup)
authRouter.post("/login", login)
authRouter.post("/logout", logout)

export default authRouter