const { calculateRoute, checkDirtPatches } = require("./index");

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
    const result = calculateRoute(roomDimentions, hooverStartPos, dirtPatches, hooverDirections);
    expect(result).toEqual(expectedResult);
  });
})
