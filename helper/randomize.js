const recreateArray = require("./recreateArray");

const randomize = (data, item, array) => {
    if (item.length === 0) {
        let randomArtist = data[Math.floor(Math.random() * data.length)];
        [randomArtist] = recreateArray([randomArtist]);
        array[array.length] = randomArtist;
    }

    return array;
};

module.exports = randomize;
