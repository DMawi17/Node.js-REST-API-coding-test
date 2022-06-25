const db = require("../db");
const { recreateArray } = require("../helper");

let arrayOfArtistObject = [];

const list = async (req, res) => {
    let randomArtist = db[Math.floor(Math.random() * db.length)];
    [randomArtist] = recreateArray([randomArtist]);
    arrayOfArtistObject[arrayOfArtistObject.length] = randomArtist;
};

module.exports = list;
