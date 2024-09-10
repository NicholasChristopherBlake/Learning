const mapArrToStrings = require("./mapArrToStrings");

describe("mapArrToStrings", () => {
  test("Correct value", () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("Some stuff", () => {
    expect(mapArrToStrings([1, 2, 3, null, undefined, "asasf"])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });
  test("Empty array", () => {
    expect(mapArrToStrings([])).toEqual([]);
  });
  test("Negative", () => {
    expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
  });
});
