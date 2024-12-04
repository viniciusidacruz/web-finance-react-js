import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import { Navigation } from "@components/internal";

describe("Navigation", () => {
  it("renders the Navigation with component root", () => {
    render(<Navigation.Root>Hello</Navigation.Root>);

    const children = screen.getByText("Hello");

    expect(children).toBeInTheDocument();
  });

  it("renders the NavigationItem with the path /", () => {
    render(
      <BrowserRouter>
        <Navigation.Item path="/">Hello</Navigation.Item>
      </BrowserRouter>
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/");
    expect(link).toHaveClass("text-primary");
  });
});
