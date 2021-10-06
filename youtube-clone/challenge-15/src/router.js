import express from "express";
import { getHome, postRead } from "./controller";
import { textUpload } from "./middleware";

const rootRouter = express.Router();
const readRouter = express.Router();

readRouter
  .route("/")
  .get(getHome)
  .post(textUpload.single("textfile"), postRead);
rootRouter.route("/").get(getHome);

export { rootRouter, readRouter };
