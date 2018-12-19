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
  const roomDimensions = inputArray[0].split(" ").map(value => parseInt(value));
  const hooverStartPos = inputArray[1].split(" ").map(value => parseInt(value));
  const dirtPatches = inputArray
    .slice(2, inputArray.length - 1)
    .map(patch => patch.split(" "))
    .map(coordinate => coordinate.map(value => parseInt(value)));
  const hooverDirections = inputArray[inputArray.length - 1].split("");
  calculateRoute(roomDimensions, hooverStartPos, dirtPatches, hooverDirections);
}

function calculateRoute(
  roomDimensions,
  hooverStartPos,
  dirtPatches,
  hooverDirections
) {
  const roomX = roomDimensions[0];
  const roomY = roomDimensions[1];
  let hooverX = hooverStartPos[0];
  let hooverY = hooverStartPos[1];
  const hooverRoute = [hooverStartPos];
  hooverDirections.forEach(direction => {
    if (direction === "N") {
      if (hooverY + 1 <= roomY) {
        hooverY += 1;
        hooverRoute.push([hooverX, hooverY]);
      } else {
        hooverRoute.push([hooverX, hooverY]);
      }
    } else if (direction === "S") {
      if (hooverY - 1 >= 0) {
        hooverY -= 1;
        hooverRoute.push([hooverX, hooverY]);
      } else {
        hooverRoute.push([hooverX, hooverY]);
      }
    } else if (direction === "E") {
      if (hooverX + 1 <= roomX) {
        hooverX += 1;
        hooverRoute.push([hooverX, hooverY]);
      } else {
        hooverRoute.push([hooverX, hooverY]);
      }
    } else if (direction === "W") {
      if (hooverX - 1 >= 0) {
        hooverX -= 1;
        hooverRoute.push([hooverX, hooverY]);
      } else {
        hooverRoute.push([hooverX, hooverY]);
      }
    }
  });
  checkDirtPatches(dirtPatches, hooverRoute);
}

function checkDirtPatches(dirtPatches, hooverRoute) {
  let cleanedDirtPatches = [];
  let numberOfPatchesCleaned = 0;
  const hooverEndPos = hooverRoute[hooverRoute.length - 1];
  hooverRoute.forEach(routePoint => {
    dirtPatches.forEach(dirtPatch => {
      if (dirtPatch[0] === routePoint[0] && dirtPatch[1] === routePoint[1]) {
        numberOfPatchesCleaned += 1;
      }
    });
  });
  console.log(hooverRoute);
  console.log(hooverEndPos);
  console.log(cleanedDirtPatches);
}

fetchInput();
