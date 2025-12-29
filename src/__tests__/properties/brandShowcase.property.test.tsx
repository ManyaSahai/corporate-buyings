import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { render, screen } from "@testing-library/react";
import {
  BrandCard,
  BRAND_CARD_WIDTH,
  BRAND_CARD_HEIGHT,
  BRAND_LOGO_SIZE,
} from "@/components/BrandShowcase/BrandCard";
import { Brand } from "@/types";
import { Providers } from "@/app/providers";

/**
 * **Feature: cbshop, Property 5: Brand Logo Consistent Sizing**
 * **Validates: Requirements 6.2**
 *
 * For any set of brand data rendered in BrandShowcase, all brand logo
 * containers should have identical width and height dimensions.
 */

// Arbitrary for generating valid Brand objects
const brandArbitrary = fc.record({
  id: fc.uuid(),
  name: fc
    .string({ minLength: 1, maxLength: 50 })
    .filter((s) => s.trim().length > 0),
  logoUrl: fc.webUrl().map((url) => url || "https://example.com/logo.png"),
  link: fc.webUrl().map((url) => url || "/brand"),
});

// Arbitrary for generating arrays of brands (1-10 brands)
const brandsArrayArbitrary = fc.array(brandArbitrary, { minLength: 1, maxLength: 10 });

describe("Property 5: Brand Logo Consistent Sizing", () => {
  it("should render brand card with consistent fixed dimensions", () => {
    fc.assert(
      fc.property(brandArbitrary, (brand: Brand) => {
        const { unmount } = render(
          <Providers>
            <BrandCard brand={brand} />
          </Providers>
        );

        // Brand card should have fixed dimensions
        const brandCard = screen.getByTestId("brand-card");
        expect(brandCard).toBeInTheDocument();

        // Check that the card has the expected fixed width and height styles
        const cardStyle = window.getComputedStyle(brandCard);
        expect(cardStyle.width).toBe(`${BRAND_CARD_WIDTH}px`);
        expect(cardStyle.height).toBe(`${BRAND_CARD_HEIGHT}px`);

        unmount();
      }),
      { numRuns: 100 }
    );
  });

  it("should render brand logo container with consistent fixed dimensions", () => {
    fc.assert(
      fc.property(brandArbitrary, (brand: Brand) => {
        const { unmount } = render(
          <Providers>
            <BrandCard brand={brand} />
          </Providers>
        );

        // Brand logo container should have fixed dimensions
        const logoContainer = screen.getByTestId("brand-logo-container");
        expect(logoContainer).toBeInTheDocument();

        const containerStyle = window.getComputedStyle(logoContainer);
        expect(containerStyle.width).toBe(`${BRAND_LOGO_SIZE}px`);
        expect(containerStyle.height).toBe(`${BRAND_LOGO_SIZE}px`);

        unmount();
      }),
      { numRuns: 100 }
    );
  });

  it("should render all brand cards with identical dimensions when multiple brands are displayed", () => {
    fc.assert(
      fc.property(brandsArrayArbitrary, (brands: Brand[]) => {
        const { unmount } = render(
          <Providers>
            <div data-testid="brand-container">
              {brands.map((brand) => (
                <BrandCard key={brand.id} brand={brand} />
              ))}
            </div>
          </Providers>
        );

        // Get all brand cards
        const brandCards = screen.getAllByTestId("brand-card");
        expect(brandCards.length).toBe(brands.length);

        // All cards should have identical dimensions
        const dimensions = brandCards.map((card) => {
          const style = window.getComputedStyle(card);
          return { width: style.width, height: style.height };
        });

        // Check that all dimensions are the same
        const firstDimension = dimensions[0];
        dimensions.forEach((dim) => {
          expect(dim.width).toBe(firstDimension.width);
          expect(dim.height).toBe(firstDimension.height);
        });

        // Verify they match the expected fixed dimensions
        expect(firstDimension.width).toBe(`${BRAND_CARD_WIDTH}px`);
        expect(firstDimension.height).toBe(`${BRAND_CARD_HEIGHT}px`);

        unmount();
      }),
      { numRuns: 100 }
    );
  });

  it("should render all brand logo containers with identical dimensions", () => {
    fc.assert(
      fc.property(brandsArrayArbitrary, (brands: Brand[]) => {
        const { unmount } = render(
          <Providers>
            <div data-testid="brand-container">
              {brands.map((brand) => (
                <BrandCard key={brand.id} brand={brand} />
              ))}
            </div>
          </Providers>
        );

        // Get all logo containers
        const logoContainers = screen.getAllByTestId("brand-logo-container");
        expect(logoContainers.length).toBe(brands.length);

        // All logo containers should have identical dimensions
        const dimensions = logoContainers.map((container) => {
          const style = window.getComputedStyle(container);
          return { width: style.width, height: style.height };
        });

        // Check that all dimensions are the same
        const firstDimension = dimensions[0];
        dimensions.forEach((dim) => {
          expect(dim.width).toBe(firstDimension.width);
          expect(dim.height).toBe(firstDimension.height);
        });

        // Verify they match the expected fixed dimensions
        expect(firstDimension.width).toBe(`${BRAND_LOGO_SIZE}px`);
        expect(firstDimension.height).toBe(`${BRAND_LOGO_SIZE}px`);

        unmount();
      }),
      { numRuns: 100 }
    );
  });
});
