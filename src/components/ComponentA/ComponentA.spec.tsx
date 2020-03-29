import "@testing-library/jest-dom";

import * as React from "react";
import { render, screen } from "@testing-library/react";

import ComponentA from "./ComponentA";

describe("<ComponentA />", () => {
  it("renders correctly", () => {
    render(<ComponentA />);

    expect(screen.getByText("Component A placeholder")).toBeInTheDocument();
  });
});
