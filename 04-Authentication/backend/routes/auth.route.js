import express from "express"
import { getUserData, login, logout, signup } from "../controllers/auth.controller.js"
import { multerUpload } from "../middlewares/multer.middleware.js"
import { checkAuth } from "../middlewares/checkAuth.middleware.js"

const authRouter = express.Router()

authRouter.post("/signup", multerUpload.single("profileImage"), signup)
authRouter.post("/login", login)
authRouter.post("/logout", logout)
authRouter.get("/getuserdata", checkAuth, getUserData)
export default authRouter 