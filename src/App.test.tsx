import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
  it("App renders without crashing", () => {
    render(<App />);
    expect(screen.getAllByText("Favourite")).toBeDefined();
    expect(screen.getByPlaceholderText("Please add image name")).toBeDefined();
  });
});
