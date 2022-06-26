const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const writeRecordsToCsv = async (records) => {
    const headerRow = ["name", "mbid", "url", "image_small", "image"];

    const path = "./user-supplied.csv";
    const customWriteObj = {
        path,
        header: headerRow.map((column) => ({ id: column, title: column })),
    };

    const csvWriter = createCsvWriter(customWriteObj);
    await csvWriter
        .writeRecords(records)
        .then(() => console.log("Data uploaded into csv successfully"));
};

module.exports = writeRecordsToCsv;
