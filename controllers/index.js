const db = require("../db");
const { recreateArray } = require("../helper");

let arrOfArtistDetail = [];

const list = async (req, res) => {
    let randomArtist = db[Math.floor(Math.random() * db.length)];
    [randomArtist] = recreateArray([randomArtist]);
    arrOfArtistDetail[arrOfArtistDetail.length] = randomArtist;

    res.json(arrOfArtistDetail);
};

module.exports = list;
