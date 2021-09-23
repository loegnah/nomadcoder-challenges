import express from "express";
import {
  home,
  movieDetail,
  filterMovie,
  getAddMovie,
  postAddMovie,
} from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.get("/filter", filterMovie);
movieRouter.route("/addMovie").get(getAddMovie).post(postAddMovie);
movieRouter.get("/:id(\\d+)", movieDetail);

export default movieRouter;
