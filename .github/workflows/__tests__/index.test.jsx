import { render, screen } from "@testing-library/react";
import Home from "../../../src/pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => {
          return Promise.resolve("");
        },
      })
    );
    render(<Home />);

    const heading = screen.getByText("Welcome");

    expect(heading).toBeInTheDocument();
  });
})