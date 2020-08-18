const express = require("express");
const app = express();
const htmlRoutes = require("./routes/htmlRoutes.js");
const apiRoutes = require("./routes/apiRoutes.js");

const PORT = process.env.PORT || 3030;

