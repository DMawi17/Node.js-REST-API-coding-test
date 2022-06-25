const recreateArray = (data) => {
    const arrOfExtractedObj = data.map((singer) => {
        const [image_small] = singer.image.map((img) =>
            img.size == "small" ? img["#text"] : null
        );

        return {
            name: singer.name,
            mbid: singer.mbid,
            url: singer.url,
            image_small,
            image: singer.image,
        };
    });

    return arrOfExtractedObj;
};

module.exports = recreateArray;
