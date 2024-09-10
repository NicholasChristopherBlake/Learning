import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "../../router/AppRouter";
import React from "react";

export const renderWithRouter = (component, initialRoute = "/") => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
};
