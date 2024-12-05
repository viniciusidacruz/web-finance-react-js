import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";

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

  it("render the NavigationTab with the param correctly", () => {
    render(
      <BrowserRouter>
        <Navigation.Tab param="Nesse mês">Nesse mês</Navigation.Tab>
      </BrowserRouter>
    );

    const tab = screen.getByRole("button");

    expect(tab).toBeInTheDocument();

    fireEvent.click(tab);

    expect(tab).toHaveClass(
      "text-primary bg-green-50 font-semibold text-base leading-6 py-2 px-3 hover:text-primary"
    );
  });
});
