const express = require("express");
const app = express();
const router = express.Router();
require("dotenv").config();

const api = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/views"));


router.get("/", (req, res) => {
    res.render("index.html");
});

app.use("/api/v1", api);

const port = process.env.PORT;
app.listen(port, () => {
    /* eslint-disable no-console */
    console.log(`Listening: http://localhost:${port}`);
    /* eslint-enable no-console */
});

module.exports = app;
