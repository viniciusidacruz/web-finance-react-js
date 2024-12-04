import { Settings } from "lucide-react";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { Header } from "@components/internal";

describe("Header", () => {
  it("renders the header with component root", () => {
    render(<Header.Root>Root</Header.Root>);

    const children = screen.getByText("Root");

    expect(children).toBeInTheDocument();
  });

  it("renders the header with component container", () => {
    render(<Header.Container>Container</Header.Container>);

    const children = screen.getByText("Container");

    expect(children).toBeInTheDocument();
  });

  it("renders the header with component icon", () => {
    render(<Header.Icon icon={Settings} />);

    const icon = screen.getByTestId("@header-icon");

    expect(icon).toBeInTheDocument();
  });
});
