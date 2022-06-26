require("dotenv").config();

const config = {
    port: process.env.PORT || 8080,
    apiKey: process.env.API_KEY,
};

module.exports = config;
