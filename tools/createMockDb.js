/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const { contacts } = mockData;
const data = JSON.stringify({ contacts });
const filepath = path.join(__dirname, "db.txt");

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
