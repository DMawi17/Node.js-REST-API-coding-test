const db = require("../db");
const { recreateArray, writeRecordsToCsv, randomize } = require("../helper");
const fetchArtistByName = require("../api");

let storeLocalArtist = [];

const list = async (req, res) => {
    try {
        const result = await fetchArtistByName(req.params.artist);
        const { artist } = result.data.results.artistmatches;
        const listRemoteArtist = recreateArray(artist);

        const randomizeLocalArtist = randomize(db, artist, storeLocalArtist);

        const readyResult =
            artist.length === 0 ? randomizeLocalArtist : listRemoteArtist;

        const beautifyJson = JSON.stringify(readyResult, null, 2) + "\n";
        res.type("json").send(beautifyJson);

        writeRecordsToCsv(readyResult);
    } catch (error) {
        return res.status(400);
    }
};

module.exports = list;
