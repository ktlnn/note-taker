const fs = require("fs");
const express = require("express");
const router = express.Router();
const path = require("path");
const util = require("util");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);



router.get("/api/notes", (req, res => {
    res.sendFile(path.join(__dirname, "../db/", "db.json"));
}));

router.post("/api/notes", (req, res => {
    console.log(res);
}));
