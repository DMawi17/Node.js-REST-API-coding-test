const axios = require("axios");
const { apiKey } = require("../config");

const API_ROOT_URL = "http://ws.audioscrobbler.com/2.0";
const ARTIST_SEARCH = "/?method=artist.search";

const client = axios.create({
    baseURL: API_ROOT_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

let params = new URLSearchParams();
params.append("api_key", apiKey);
params.append("format", "json");

let request = {
    params,
};

const fetchArtistByName = (str, params = request) => {
    return client.get(`${ARTIST_SEARCH}&artist=${str}`, params);
};

module.exports = fetchArtistByName;
