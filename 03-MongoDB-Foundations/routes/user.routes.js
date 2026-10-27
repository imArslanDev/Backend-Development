import express, { Router } from "express"
import { api, createUser, readAllUsers, readSingleUser, findUser, updateUser, deleteUser } from "../controllers/index.js"
const userRouter = express.Router()

userRouter.get("/", api)
userRouter.post("/create", createUser)
userRouter.get("/readAllUser", readAllUsers)
userRouter.get("/read/:userName", readSingleUser)
userRouter.get("/find", findUser)
userRouter.put("/update/:id", updateUser)
userRouter.delete("/delete/:id", deleteUser)


export default userRouter