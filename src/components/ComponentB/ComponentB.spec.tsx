import "@testing-library/jest-dom";

import * as React from "react";
import { render, screen } from "@testing-library/react";

import ComponentB from "./ComponentB";

describe("<ComponentB />", () => {
  it("renders correctly", () => {
    render(<ComponentB />);

    expect(screen.getByText("Component B placeholder")).toBeInTheDocument();
  });
});
