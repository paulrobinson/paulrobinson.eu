import React from "react";
import { render, screen } from "@testing-library/react";

import Footer from ".";

describe("Footer", () => {
  it("renders something with a footers role", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeTruthy();
  });

  it("renders an author name", () => {
    render(<Footer />);
    expect(screen.getByText(/built by paul robinson/i)).toBeInTheDocument();
  });

  it("renders a social media link", () => {
    render(<Footer />);
    expect(screen.getByText(/bluesky|twitter/)).toBeTruthy();
  });

  it("renders an icon", () => {
    const type = "rss";
    render(<Footer />);
    expect(screen.getByTitle(type)).toBeTruthy();
  });
});
