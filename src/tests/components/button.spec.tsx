import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Button } from "../../presentation/global/components/external";

describe("Button", () => {
  it("renders the button with the default variant", () => {
    render(<Button>Hello</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("text-primary-foreground");
  });

  it("renders the button with the destructive variant", () => {
    render(<Button variant="destructive">Hello</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("text-destructive-foreground");
  });

  it("renders the button with the outline variant", () => {
    render(<Button variant="outline">Hello</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("bg-background");
  });

  it("renders the button with the secondary variant", () => {
    render(<Button variant="secondary">Hello</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("text-secondary-foreground");
  });

  it("renders the button with the ghost variant", () => {
    render(<Button variant="ghost">Hello</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("hover:bg-accent hover:text-accent-foreground");
  });

  it("renders the button with the link variant", () => {
    render(<Button variant="link">Hello</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("underline-offset-4");
  });

  it("renders the button with the size sm", () => {
    render(<Button size="sm">Hello</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("text-xs");
  });

  it("renders the button with the size lg", () => {
    render(<Button size="lg">Hello</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("h-10 px-8");
  });

  it("renders the button with the size icon", () => {
    render(<Button size="icon">Hello</Button>);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("h-9 w-9");
  });

  it("renders the button disabled if isLoading is true", () => {
    render(<Button isLoading>Hello</Button>);

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });
});
