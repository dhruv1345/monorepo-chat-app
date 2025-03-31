"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.use(express.json());
app.get("/signup", function (req, res) {
    res.send("Hello World!");
});
app.get("/signin", function (req, res) {
    res.status(200).json({ status: "ok" });
});
app.get("/chat", function (req, res) {
    res.send("chat karo.com");
});
app.listen(3000, function () {
    console.log("Server is running on http://localhost:3000");
});
