import "@testing-library/jest-dom";

import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import ComponentA from "./ComponentA";

describe("<ComponentA />", () => {
  it("renders correctly", () => {
    render(<ComponentA />);

    expect(screen.getByText("Component A placeholder")).toBeInTheDocument();
  });

  it("displays the Set Cookies button", () => {
    render(<ComponentA />);

    expect(screen.getByText("Set cookies")).toBeInTheDocument();
  });

  it("displays content after the Set Cookies button is clicked", () => {
    render(<ComponentA />);

    fireEvent.click(screen.getByText(/cookies/i));

    expect(screen.getByText("Cookies are set")).toBeInTheDocument();
  });
});
