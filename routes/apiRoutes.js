const fs = require("fs");
const express = require("express");
const router = express.Router();
const path = require("path");
const util = require("util");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

