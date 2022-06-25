const db = require("../db");
const { recreateArray } = require("../helper");
const fetchArtistByName = require("../api");

let arrayOfArtistObject = [];

const list = async (req, res) => {
    try {
        const name = req.params.artist;
        const result = await fetchArtistByName(name);
        const { artist } = result.data.results.artistmatches;

        if (artist == 0) {
            let randomArtist = db[Math.floor(Math.random() * db.length)];
            [randomArtist] = recreateArray([randomArtist]);
            arrayOfArtistObject[arrayOfArtistObject.length] = randomArtist;
        } else {
            arrayOfArtistObject = recreateArray(artist);
        }

        res.json(arrayOfArtistObject);
    } catch (error) {
        return res.status(400);
    }
};

module.exports = list;
