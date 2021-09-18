import express from "express";
import userRouter from "./routers/userRouter";
import storyRouter from "./routers/stroyRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/stories", storyRouter);

app.listen(() => console.log(`Listening!`));
