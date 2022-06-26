const express = require("express");
const routes = require("./route");
const { port } = require("./config");

const app = express();

app.use("/", routes);

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.info("Server started on port %s.", port);
});
