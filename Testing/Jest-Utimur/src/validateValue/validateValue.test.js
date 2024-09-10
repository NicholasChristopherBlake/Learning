const validateValue = require("./validateValue");

describe("validate Value", () => {
  test("Correct value", () => {
    expect(validateValue(50)).toBe(true);
  });
  test("Less than correct", () => {
    expect(validateValue(-1)).toBe(false);
  });
  test("More than correct", () => {
    expect(validateValue(101)).toBe(false);
  });
  test("Border value below", () => {
    expect(validateValue(0)).toBe(true);
  });
  test("Border value uptop", () => {
    expect(validateValue(100)).toBe(true);
  });
});
