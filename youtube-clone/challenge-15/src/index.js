import express from "express";
import path from "path";
import { rootRouter, readRouter } from "./router";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.use("/read", readRouter);
app.use("/", rootRouter);

// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`Listening!`));
