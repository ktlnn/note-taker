const express = require("express");
const app = express();
const htmlRouter = require("./routes/htmlRoutes");
const path = require("path");
const apiRouter = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3030;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// apiRoutes(app);
// htmlRoutes(app);
app.use("/api", apiRouter);
app.use("/", htmlRouter);

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT)
})