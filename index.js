const fs = require("fs");
const util = require("util");

const readInput = util.promisify(fs.readFile);

function fetchInstructions() {
  readInput("input.txt", "utf8")
    .then(input => console.log(input))
    .catch(error => console.log(error));
}

fetchInstructions();