import * as express from "express";

const app = express();

app.use(express.json());

app.get("/signup", (req, res) => {
  res.send("Hello World!");
});

app.get("/signin", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/chat", (req, res) => {
  res.send("chat karo.com");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
