const fs = require("fs");
const util = require("util");

const readInput = util.promisify(fs.readFile);

function fetchInput() {
  readInput("input.txt", "utf8")
    .then(input => inputToArray(input))
    .catch(error => console.log(error));
}

function inputToArray(input) {
  const inputArray = input.split("\n");
  seperateVariables(inputArray);
}

function seperateVariables(inputArray) {
  const roomDimensions = inputArray[0].split(" ");
  const roomX = roomDimensions[0];
  const roomY = roomDimensions[1];
  const hooverPosition = inputArray[1].split(" ");
  const hooverX = hooverPosition[0];
  const hooverY = hooverPosition[1];
  const dirtPatches = inputArray.slice(2, (inputArray.length - 1))
  .map(patch => patch.split(" "));
  const hooverDirections = inputArray[inputArray.length - 1];
}

function calculateRoute() {
    
}

fetchInput();
