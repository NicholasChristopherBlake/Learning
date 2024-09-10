import { getCounterValue } from "./getCounterValue";

describe("getCountervalue", () => {
  test("works with empty state", () => {
    expect(getCounterValue({})).toBe(0);
  });
  test("works with filled state", () => {
    expect(
      getCounterValue({
        counter: {
          value: 100,
        },
      })
    ).toBe(100);
  });
});
