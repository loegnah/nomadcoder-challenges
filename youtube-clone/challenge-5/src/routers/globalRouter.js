import express from "express";
import { join, login, newUser } from "../controllers/userController";
import { trending } from "../controllers/storyController";

const globalRouter = express.Router();

globalRouter.get("/", (req, res) => res.send("home"));
globalRouter.get("/trending", trending);
globalRouter.get("/new", newUser);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
