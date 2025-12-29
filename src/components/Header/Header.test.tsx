import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@/theme";
import { Header } from "./Header";

const renderWithChakra = (ui: React.ReactElement) => {
  return render(<ChakraProvider value={system}>{ui}</ChakraProvider>);
};

describe("Header", () => {
  it("renders the header with all required elements", () => {
    renderWithChakra(<Header />);

    // Check for logo text
    expect(screen.getByText("CBShop")).toBeInTheDocument();

    // Check for search bar placeholder
    expect(
      screen.getByPlaceholderText("Search for products, brands and more")
    ).toBeInTheDocument();

    // Check for login button
    expect(screen.getByText("Login / Sign Up")).toBeInTheDocument();

    // Check for cart
    expect(screen.getByText("Cart")).toBeInTheDocument();

    // Check for navigation items
    expect(screen.getByText("All Categories")).toBeInTheDocument();
    expect(screen.getByText("Power Tools")).toBeInTheDocument();
    expect(screen.getByText("Hand Tools")).toBeInTheDocument();
  });

  it("renders with sticky positioning by default", () => {
    const { container } = renderWithChakra(<Header />);
    const header = container.querySelector("header");
    expect(header).toHaveStyle({ position: "sticky" });
  });

  it("renders with relative positioning when isSticky is false", () => {
    const { container } = renderWithChakra(<Header isSticky={false} />);
    const header = container.querySelector("header");
    expect(header).toHaveStyle({ position: "relative" });
  });
});
