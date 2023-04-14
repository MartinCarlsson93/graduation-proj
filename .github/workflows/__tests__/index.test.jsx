import { render, screen } from "@testing-library/react";
import About from "../../../src/pages/about";
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
    render(<About />);

    const heading = screen.getByText("About Grocify");

    expect(heading).toBeInTheDocument();
  });
})