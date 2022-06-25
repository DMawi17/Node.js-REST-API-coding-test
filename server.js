const express = require("express");
const { port } = require("./config");

const app = express();

app.get("/", (req, res) => {
    res.send("It works");
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.info("Server started on port %s.", port);
});
