import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import { Logo } from "@components/internal";

describe("Logo", () => {
  it("renders the Logo", () => {
    render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    );

    const logoText = screen.getByText("WFReact");

    expect(logoText).toBeInTheDocument();
  });

  it("renders the Logo with the path /", () => {
    render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/");
    expect(link).toHaveClass("text-primary");
  });
});
