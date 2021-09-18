import express from "express";
import { edit, deleteStory, see } from "../controllers/storyController";

const storyRouter = express.Router();

storyRouter.get("/:id(\\d+)/edit", edit);
storyRouter.get("/:id(\\d+)/delete", deleteStory);
storyRouter.get("/:id(\\d+)", see);

export default storyRouter;
