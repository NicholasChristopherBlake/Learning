import counterReducer, { decremented, incremented } from "./counterReducer";

describe("getCounterValue", () => {
  test("increment", () => {
    expect(counterReducer({ value: 0 }, incremented())).toEqual({ value: 1 });
  });
  test("decrement", () => {
    expect(counterReducer({ value: 0 }, decremented())).toEqual({ value: -1 });
  });
  test("empty state", () => {
    expect(counterReducer(undefined, incremented())).toEqual({ value: 1 });
    expect(counterReducer(undefined, decremented())).toEqual({ value: -1 });
  });
});
