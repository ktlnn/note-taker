// const path = require("path");
// const express = require("express");
// // const router = express.Router();



// module.exports = (app) => {
// app.get("/", (req, res)=>{
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });
// app.get("/notes", (req, res)=>{
//     res.sendFile(path.join(__dirname, "../public/notes.html"));
// });
// }

// // module.exports = htmlRoutes;

const path = require("path");
const router = require("express").Router();

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "notes.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = router;