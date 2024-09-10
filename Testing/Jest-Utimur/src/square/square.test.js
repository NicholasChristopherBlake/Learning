const square = require("./square");

describe("square", () => {
  let mockValue;
  beforeEach(() => {});
  beforeAll(() => {});
  test("Correct value", () => {
    // expect(square(2)).toBe(4);
    // expect(square(2)).toBeLessThan(5);
    // expect(square(2)).toBeGreaterThan(3);
    // expect(square(2)).not.toBeUndefined();
    const spyMathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(spyMathPow).toHaveBeenCalledTimes(1);
  });
  test("Incorrent value = 1", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(1);
    expect(spyMathPow).toHaveBeenCalledTimes(0);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {});
});
