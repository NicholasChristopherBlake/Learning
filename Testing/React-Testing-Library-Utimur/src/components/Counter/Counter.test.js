import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { renderTestApp } from "../../tests/helpers/renderTestApp";

describe("Counter test", () => {
  test("test router", async () => {
    const { getByTestId } = renderTestApp(null, {
      route: "/",
      initialState: { counter: { value: 10 } },
    });
    const incrementBtn = getByTestId("increment-btn");
    expect(getByTestId("value-title")).toHaveTextContent("10");
    await userEvent.click(incrementBtn);
    expect(getByTestId("value-title")).toHaveTextContent("11");
  });
});
