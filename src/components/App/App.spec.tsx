import "@testing-library/jest-dom";

import * as React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("<App />", () => {
  it("renders correctly", () => {
    render(<App />);

    expect(screen.getByText("React Components")).toBeInTheDocument();
  });
});
