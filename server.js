const express = require("express");
const routes = require("./route");
const { port } = require("./config");

const app = express();

app.use("/", routes);

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.info("Server started on port %s.", port);
});
