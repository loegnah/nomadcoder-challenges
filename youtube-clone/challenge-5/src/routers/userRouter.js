import express from "express";
import { userHome, editProfile, see } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", userHome);
userRouter.get("/edit-profile", editProfile);
userRouter.get("/:id(\\d+)", see);

export default userRouter;
