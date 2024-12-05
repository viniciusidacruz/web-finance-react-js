import { toUrlFriendly } from "@utils/to-url-friendly";
import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";

describe("toUrlFriendly", () => {
  it("returns an empty string for null input", () => {
    expect(toUrlFriendly(null)).toBe("");
  });

  it("returns an empty string for undefined input", () => {
    expect(toUrlFriendly(undefined)).toBe("");
  });

  it("removes non-alphanumeric characters", () => {
    expect(toUrlFriendly("Hello, World!")).toBe("hello-world");
  });

  it("replaces multiple consecutive hyphens with a single hyphen", () => {
    expect(toUrlFriendly("Hello--World")).toBe("hello-world");
  });

  it("removes leading and trailing hyphens", () => {
    expect(toUrlFriendly("--Hello-World--")).toBe("hello-world");
  });
});
