import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../tests/helpers/renderWithRouter";
import Navbar from "./Navbar";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";

describe("USERS TEST", () => {
  test("test about link", async () => {
    renderWithRouter(<Navbar />);
    const aboutLink = screen.getByTestId("about-link");
    await userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });
  test("test main link", async () => {
    renderWithRouter(<Navbar />);
    const mainLink = screen.getByTestId("main-link");
    await userEvent.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test("test users link", async () => {
    renderWithRouter(<Navbar />);
    const usersLink = screen.getByTestId("users-link");
    await userEvent.click(usersLink);
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
  });
});
