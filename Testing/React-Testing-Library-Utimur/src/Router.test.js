import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

describe("TEST APP", () => {
  test("Router test", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const mainLink = screen.getByTestId("main-link");
    const aboutLink = screen.getByTestId("about-link");
    await userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
    await userEvent.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });
  test("Error page test", async () => {
    render(
      <MemoryRouter initialEntries={["/asadasd"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("not-found-page")).toBeInTheDocument();
  });
});
