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

const params = new URLSearchParams();
const request = {
    params,
};

const fetchArtistByName = (str, params = request) => {
    request.params.append("artist", str);
    request.params.append("api_key", apiKey);
    request.params.append("format", "json");

    return client.get(ARTIST_SEARCH, params);
};

module.exports = fetchArtistByName;
