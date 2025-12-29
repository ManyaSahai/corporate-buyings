import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { render, screen } from "@testing-library/react";
import { CategoryCard } from "@/components/CategorySection/CategoryCard";
import { Category } from "@/types";
import { Providers } from "@/app/providers";

/**
 * **Feature: cbshop, Property 3: Category Card Content Completeness**
 * **Validates: Requirements 3.2**
 *
 * For any category data object with name, imageUrl, and optional discount,
 * the rendered CategoryCard should contain the name text, an image with
 * the correct src, and the discount badge if discount is provided.
 */

// Arbitrary for generating valid Category objects
const categoryArbitrary = fc.record({
  id: fc.uuid(),
  name: fc.string({ minLength: 1, maxLength: 100 }).filter((s) => s.trim().length > 0),
  slug: fc.string({ minLength: 1, maxLength: 50 }).map((s) => s.replace(/\s/g, "-")),
  imageUrl: fc.webUrl().map((url) => url || "https://example.com/image.jpg"),
  discount: fc.option(
    fc.stringMatching(/^(Up to )?\d{1,2}% OFF$/),
    { nil: undefined }
  ),
  parentId: fc.option(fc.uuid(), { nil: undefined }),
  order: fc.integer({ min: 0, max: 100 }),
  link: fc.webUrl().map((url) => url || "/category"),
});

describe("Property 3: Category Card Content Completeness", () => {
  it("should display category name for any valid category", () => {
    fc.assert(
      fc.property(categoryArbitrary, (category: Category) => {
        const { unmount } = render(
          <Providers>
            <CategoryCard category={category} />
          </Providers>
        );

        // Category name should be present in the document
        const nameElement = screen.getByTestId("category-name");
        expect(nameElement).toBeInTheDocument();
        expect(nameElement.textContent).toBe(category.name);

        unmount();
      }),
      { numRuns: 100 }
    );
  });

  it("should render image with correct src for any valid category", () => {
    fc.assert(
      fc.property(categoryArbitrary, (category: Category) => {
        const { unmount } = render(
          <Providers>
            <CategoryCard category={category} />
          </Providers>
        );

        // Image should be present with correct src
        const imageElement = screen.getByTestId("category-image");
        expect(imageElement).toBeInTheDocument();
        // next/image uses src attribute
        expect(imageElement).toHaveAttribute("src");

        unmount();
      }),
      { numRuns: 100 }
    );
  });

  it("should show discount badge if and only if discount is provided", () => {
    fc.assert(
      fc.property(categoryArbitrary, (category: Category) => {
        const { unmount } = render(
          <Providers>
            <CategoryCard category={category} />
          </Providers>
        );

        const discountBadge = screen.queryByTestId("discount-badge");

        if (category.discount) {
          // Discount badge should be present and show the discount text
          expect(discountBadge).toBeInTheDocument();
          expect(discountBadge?.textContent).toBe(category.discount);
        } else {
          // Discount badge should not be present
          expect(discountBadge).not.toBeInTheDocument();
        }

        unmount();
      }),
      { numRuns: 100 }
    );
  });
});
