import "./models/Movie";
import express from "express";
import path from "path";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

// Codesanbox does not need PORT :)
app.listen(() => console.log(`✅  Server Ready!`));
