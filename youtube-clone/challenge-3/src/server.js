import express from "express";

const app = express();

const urlLogger = (req, res, next) => {
  console.log(`Path: ${req.url}`);
  next();
};
const timeLogger = (req, res, next) => {
  const d = new Date();
  console.log(`Time: ${d.getFullYear()}.${d.getMonth()}.${d.getDay()}`);
  next();
};
const securityLogger = (req, res, next) => {
  const isSecure = req.protocol === "https" ? "O" : "X";
  console.log(`Insecure: ${isSecure}`);
  next();
};
const protector = (req, res, next) => {
  if (req.url === "/protected") {
    res.send("Get out");
    return;
  }
  next();
};

app.use(urlLogger);
app.use(timeLogger);
app.use(securityLogger);
app.use(protector);
app.get("/", (req, res) => res.send("<h1>Home</h1>"));
app.get("/protected", (req, res) => res.send("<h1>Protected</h1>"));

// Codesandbox gives us a PORT :)
app.listen(3000, () => `Listening!✅`
);
