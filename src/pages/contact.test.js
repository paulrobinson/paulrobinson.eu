import React from "react";
import { render, screen } from "@testing-library/react";
import ContactPage from "./contact";

import { ThemeContext } from "../layouts";
import { cover } from "../../__mocks__/site.js";

import themeObjectFromYaml from "../theme/theme.yaml";

// @see https://testing-library.com/docs/react-testing-library/setup#custom-render
const renderWithTheme = (ui, theme) => {
  return render(<ThemeContext.Provider value={theme}>{ui}</ThemeContext.Provider>);
};

const layoutData = {
  bgDesktop: {
    resize: { src: "desktop" }
  },
  bgTablet: {
    resize: { src: "tablet" }
  },
  bgMobile: {
    resize: { src: "mobile" }
  },
  site: {
    siteMetadata: { facebook: {} }
  }
};

describe("ContactPage", () => {
  beforeEach(async () => {
    const data = {
      site: {
        siteMetadata: { facebook: "ignore" }
      }
    };

    renderWithTheme(<ContactPage data={data} />, themeObjectFromYaml);
  });
  it("renders without error and includes some social links", async () => {
    expect(screen.getByText("@holly_cummins")).toBeTruthy();
  });

  it("includes multiple social links", async () => {
    expect(screen.getAllByRole("link")).toHaveLength(3);
  });
});
