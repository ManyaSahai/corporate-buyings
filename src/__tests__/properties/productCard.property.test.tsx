import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { render, screen } from "@testing-library/react";
import {
  ProductCard,
  calculateDiscountPercent,
  formatPrice,
} from "@/components/ProductSection/ProductCard";
import { Product } from "@/types";
import { Providers } from "@/app/providers";

/**
 * **Feature: cbshop, Property 4: Product Card Price Display**
 * **Validates: Requirements 4.1, 4.2**
 *
 * For any product with originalPrice and optional discountedPrice,
 * the ProductCard should display the original price, and if discounted,
 * should show both prices with the correct discount percentage calculated
 * as ((original - discounted) / original * 100).
 */

// Arbitrary for generating valid Product objects without discount
const productWithoutDiscountArbitrary = fc.record({
  id: fc.uuid(),
  name: fc
    .string({ minLength: 1, maxLength: 100 })
    .filter((s) => s.trim().length > 0),
  slug: fc.string({ minLength: 1, maxLength: 50 }).map((s) => s.replace(/\s/g, "-")),
  imageUrl: fc.constant("https://via.placeholder.com/150"),
  originalPrice: fc.integer({ min: 100, max: 100000 }),
  discountedPrice: fc.constant(undefined),
  discountPercent: fc.constant(undefined),
  brand: fc.string({ minLength: 1, maxLength: 50 }),
  category: fc.string({ minLength: 1, maxLength: 50 }),
  rating: fc.option(fc.float({ min: 1, max: 5, noNaN: true }), { nil: undefined }),
  reviewCount: fc.option(fc.integer({ min: 0, max: 10000 }), { nil: undefined }),
  inStock: fc.boolean(),
});

// Arbitrary for generating valid Product objects with discount
const productWithDiscountArbitrary = fc
  .record({
    id: fc.uuid(),
    name: fc
      .string({ minLength: 1, maxLength: 100 })
      .filter((s) => s.trim().length > 0),
    slug: fc.string({ minLength: 1, maxLength: 50 }).map((s) => s.replace(/\s/g, "-")),
    imageUrl: fc.constant("https://via.placeholder.com/150"),
    originalPrice: fc.integer({ min: 100, max: 100000 }),
    brand: fc.string({ minLength: 1, maxLength: 50 }),
    category: fc.string({ minLength: 1, maxLength: 50 }),
    rating: fc.option(fc.float({ min: 1, max: 5, noNaN: true }), { nil: undefined }),
    reviewCount: fc.option(fc.integer({ min: 0, max: 10000 }), { nil: undefined }),
    inStock: fc.boolean(),
  })
  .chain((base) =>
    fc
      .integer({ min: 1, max: base.originalPrice - 1 })
      .map((discountedPrice) => ({
        ...base,
        discountedPrice,
        discountPercent: undefined as number | undefined,
      }))
  );

describe("Property 4: Product Card Price Display", () => {
  describe("calculateDiscountPercent helper function", () => {
    it("should correctly calculate discount percentage for any valid price pair", () => {
      fc.assert(
        fc.property(
          fc.integer({ min: 100, max: 100000 }),
          fc.integer({ min: 1, max: 99 }),
          (originalPrice, discountPercentInput) => {
            const discountedPrice = Math.round(
              originalPrice * (1 - discountPercentInput / 100)
            );
            const calculated = calculateDiscountPercent(
              originalPrice,
              discountedPrice
            );
            // Allow for rounding differences (±1%)
            expect(Math.abs(calculated - discountPercentInput)).toBeLessThanOrEqual(1);
          }
        ),
        { numRuns: 100 }
      );
    });

    it("should return 0 for invalid inputs", () => {
      fc.assert(
        fc.property(
          fc.integer({ min: -1000, max: 0 }),
          fc.integer({ min: 0, max: 1000 }),
          (originalPrice, discountedPrice) => {
            const result = calculateDiscountPercent(originalPrice, discountedPrice);
            expect(result).toBe(0);
          }
        ),
        { numRuns: 50 }
      );
    });

    it("should return 0 when discounted price >= original price", () => {
      fc.assert(
        fc.property(
          fc.integer({ min: 100, max: 100000 }),
          (originalPrice) => {
            // Test with equal prices
            expect(calculateDiscountPercent(originalPrice, originalPrice)).toBe(0);
            // Test with higher discounted price
            expect(
              calculateDiscountPercent(originalPrice, originalPrice + 100)
            ).toBe(0);
          }
        ),
        { numRuns: 50 }
      );
    });
  });

  describe("ProductCard rendering", () => {
    it("should display original price for products without discount", () => {
      fc.assert(
        fc.property(productWithoutDiscountArbitrary, (product: Product) => {
          const { unmount } = render(
            <Providers>
              <ProductCard product={product} />
            </Providers>
          );

          // Regular price should be displayed
          const regularPrice = screen.getByTestId("regular-price");
          expect(regularPrice).toBeInTheDocument();
          expect(regularPrice.textContent).toBe(formatPrice(product.originalPrice));

          // Discounted price elements should not be present
          expect(screen.queryByTestId("discounted-price")).not.toBeInTheDocument();
          expect(screen.queryByTestId("discount-percent")).not.toBeInTheDocument();
          expect(screen.queryByTestId("discount-badge")).not.toBeInTheDocument();

          unmount();
        }),
        { numRuns: 100 }
      );
    });

    it("should display both prices and discount percentage for discounted products", () => {
      fc.assert(
        fc.property(productWithDiscountArbitrary, (product: Product) => {
          const { unmount } = render(
            <Providers>
              <ProductCard product={product} />
            </Providers>
          );

          // Discounted price should be displayed
          const discountedPrice = screen.getByTestId("discounted-price");
          expect(discountedPrice).toBeInTheDocument();
          expect(discountedPrice.textContent).toBe(
            formatPrice(product.discountedPrice!)
          );

          // Original price should be displayed (strikethrough)
          const originalPrice = screen.getByTestId("original-price");
          expect(originalPrice).toBeInTheDocument();
          expect(originalPrice.textContent).toBe(
            formatPrice(product.originalPrice)
          );

          // Discount percentage should be calculated and displayed
          const expectedPercent = calculateDiscountPercent(
            product.originalPrice,
            product.discountedPrice!
          );

          if (expectedPercent > 0) {
            const discountPercent = screen.getByTestId("discount-percent");
            expect(discountPercent).toBeInTheDocument();
            expect(discountPercent.textContent).toContain(`${expectedPercent}%`);

            // Discount badge should also be present
            const discountBadge = screen.getByTestId("discount-badge");
            expect(discountBadge).toBeInTheDocument();
            expect(discountBadge.textContent).toContain(`${expectedPercent}%`);
          }

          unmount();
        }),
        { numRuns: 100 }
      );
    });

    it("should display product name for any valid product", () => {
      fc.assert(
        fc.property(productWithoutDiscountArbitrary, (product: Product) => {
          const { unmount } = render(
            <Providers>
              <ProductCard product={product} />
            </Providers>
          );

          const nameElement = screen.getByTestId("product-name");
          expect(nameElement).toBeInTheDocument();
          expect(nameElement.textContent).toBe(product.name);

          unmount();
        }),
        { numRuns: 100 }
      );
    });

    it("should render product image for any valid product", () => {
      fc.assert(
        fc.property(productWithoutDiscountArbitrary, (product: Product) => {
          const { unmount } = render(
            <Providers>
              <ProductCard product={product} />
            </Providers>
          );

          const imageElement = screen.getByTestId("product-image");
          expect(imageElement).toBeInTheDocument();
          expect(imageElement).toHaveAttribute("src");

          unmount();
        }),
        { numRuns: 100 }
      );
    });
  });
});
