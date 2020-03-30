import "@testing-library/jest-dom";

import * as React from "react";
import { Cookies } from "react-cookie";
import { fireEvent, render, screen } from "@testing-library/react";

import ComponentA from "./ComponentA";

describe("<ComponentA />", () => {
  let cookies;

  beforeEach(() => {
    // Mocking set() for react-cookie in jest:
    // https://stackoverflow.com/a/55913105
    cookies = new Cookies();
    cookies.set = jest.fn();
  });

  it("renders correctly", () => {
    render(<ComponentA cookies={cookies} />);

    expect(screen.getByText("Component A placeholder")).toBeInTheDocument();
  });

  it("displays the Set Cookies button", () => {
    render(<ComponentA cookies={cookies} />);

    expect(screen.getByText("Set cookies")).toBeInTheDocument();
  });

  it("displays content after the Set Cookies button is clicked", () => {
    render(<ComponentA cookies={cookies} />);

    fireEvent.click(screen.getByText(/cookies/i));

    expect(screen.getByText("Cookies are set")).toBeInTheDocument();
  });
});
