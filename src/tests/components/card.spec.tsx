import "@testing-library/jest-dom/vitest";
import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import { Card } from "@components/internal";

describe("Card", () => {
  it("Should be rendered correctly component root", () => {
    render(<Card.Root>Hello</Card.Root>);

    const children = screen.getByText("Hello");
    expect(children).toBeInTheDocument();
  });

  it("Should be on click event when card is clicked", () => {
    const mockCallback = vi.fn();
    render(<Card.Root onClick={mockCallback}>Hello</Card.Root>);

    const card = screen.getByTestId("@card_root");
    fireEvent.click(card);

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });

  it("Should be rendered correctly component if is loading", () => {
    render(<Card.Root isLoading>Hello</Card.Root>);

    const children = screen.queryByText("Hello");

    expect(children).not.toBeInTheDocument();
  });

  it("Should be rendered correctly component text", () => {
    render(<Card.Text>Text</Card.Text>);

    const children = screen.getByText("Text");
    expect(children).toBeInTheDocument();
  });

  it("Should be rendered correctly component title", () => {
    render(<Card.Title>Title</Card.Title>);

    const children = screen.getByText("Title");
    expect(children).toBeInTheDocument();
  });

  it("Should be rendered correctly component bigText", () => {
    render(<Card.BigText>BIG TEXT</Card.BigText>);

    const children = screen.getByText("BIG TEXT");
    expect(children).toBeInTheDocument();
  });

  it("Should be rendered correctly component icon", () => {
    render(<Card.Icon>Icon</Card.Icon>);

    const children = screen.getByText("Icon");
    expect(children).toBeInTheDocument();
  });

  it("Should be rendered correctly component badge", () => {
    render(<Card.Badge>Badge</Card.Badge>);

    const children = screen.getByText("Badge");
    expect(children).toBeInTheDocument();
  });
});
