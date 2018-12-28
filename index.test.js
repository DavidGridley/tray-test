const {
  seperateVariables,
  calculateRoute,
  checkDirtPatches
} = require("./index");

describe("seperateVariables", () => {
  test("seperates values correctly with no dirt patches", () => {
    const inputArray = ["4 3", "0 1", "NNWWWWEESSS"];
    const result = seperateVariables(inputArray);
    const expectedResult = {
      roomDimensions: [4, 3],
      hooverStartPos: [0, 1],
      dirtPatches: [],
      hooverDirections: ["N", "N", "W", "W", "W", "W", "E", "E", "S", "S", "S"]
    };
    expect(result).toEqual(expectedResult);
  });
});

describe("calculateRoute", () => {
  test("input does not exceed room boundaries", () => {
    jest.mock("./index.js");
    const roomDimentions = [3, 3];
    const hooverStartPos = [0, 3];
    const dirtPatches = [];
    const hooverDirections = ["E", "E", "E", "N", "S", "S", "S", "S", "S"];
    const expectedResult = [
      [0, 3],
      [1, 3],
      [2, 3],
      [3, 3],
      [3, 3],
      [3, 2],
      [3, 1],
      [3, 0],
      [3, 0],
      [3, 0]
    ];
    const result = calculateRoute(
      roomDimentions,
      hooverStartPos,
      dirtPatches,
      hooverDirections
    );
    expect(result).toEqual(expectedResult);
  });
});

describe("checkDirtPatches", () => {
  test("does not count dirt patches again once cleaned", () => {
    const dirtPatches = [[2, 3], [3, 3], [3, 0]];
    const hooverRoute = [
      [0, 3],
      [1, 3],
      [2, 3],
      [3, 3],
      [2, 3],
      [3, 3],
      [3, 2],
      [3, 1],
      [3, 0],
      [3, 1],
      [3, 0],
    ];
    const result = checkDirtPatches(dirtPatches, hooverRoute);
    const expectedResult = 3;
    expect(result).toBe(expectedResult);
  })
})
