import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("TEST APP", () => {
  test("renders learn react link", () => {
    render(<App />);
    const helloWorldElement = screen.getByText(/hello world/i);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/some input/i);
    expect(helloWorldElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    // expect(input).toMatchSnapshot();
  });
  test("renders async data", async () => {
    render(<App />);
    // const helloWorldElement = screen.queryByText(/hello2/i);
    // expect(helloWorldElement).toBeNull()
    const hello = await screen.findByText(/data/i);
    expect(hello).toBeInTheDocument();
    expect(hello).toHaveStyle({ color: "red" });
  });
  test("click event", () => {
    render(<App />);
    const btn = screen.getByTestId("toggle-button");
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
    fireEvent.click(btn);
    expect(screen.getByTestId("toggle-elem")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
  });
  test("input event", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/some input/i);
    expect(screen.queryByTestId("value-elem")).toContainHTML("");
    fireEvent.input(input, {
      target: { value: "123123" },
    });
    expect(screen.queryByTestId("value-elem")).toContainHTML("123123");
  });
  test("input event with userEvent", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/some input/i);
    expect(screen.queryByTestId("value-elem")).toContainHTML("");
    userEvent.type(input, "123123");
    expect(screen.queryByTestId("value-elem")).toContainHTML("123123");
  });
});

