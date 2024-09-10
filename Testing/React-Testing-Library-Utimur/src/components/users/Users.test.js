import { fireEvent, render, screen } from "@testing-library/react";
import Users from "./Users";
const axios = require("axios");
import userEvent from "@testing-library/user-event";
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import UserDetailsPage from "../../pages/UserDetailsPage";
import "@testing-library/jest-dom";
import { renderWithRouter } from "../../tests/helpers/renderWithRouter";

jest.mock("axios");

describe("USERS TEST", () => {
  beforeEach(() => {});
  afterEach(() => {
    jest.clearAllMocks();
  });
  const response = {
    data: [
      {
        id: 1,
        name: "Leanne Graham",
      },
      {
        id: 2,
        name: "Ervin Howell",
      },
      {
        id: 3,
        name: "Clementine Bauch",
      },
    ],
  };
  test("renders learn react link", async () => {
    axios.get.mockReturnValue(response);
    renderWithRouter(<Users />);
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    expect(axios.get).toHaveBeenCalled();
  });

  test("test redirect to details page", async () => {
    axios.get.mockReturnValue(response);
    renderWithRouter(<Users />, "/users");
    const users = await screen.findAllByTestId("user-item");
    await userEvent.click(users[0]);
    screen.debug();
    expect(screen.getByTestId("user-page")).toBeInTheDocument();
  });
});
