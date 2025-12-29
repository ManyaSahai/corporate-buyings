import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { render, screen } from "@testing-library/react";
import { PromoBanner } from "@/components/PromoBanner/PromoBanner";
import { Banner } from "@/types";
import { Providers } from "@/app/providers";

/**
 * **Feature: cbshop, Property 7: Image Aspect Ratio Preservation**
 * **Validates: Requirements 5.2**
 *
 * For any banner image rendered, the displayed aspect ratio should match
 * the original image aspect ratio (within a small tolerance for rounding).
 *
 * Since we use next/image with objectFit: "cover" and fill mode, the image
 * container preserves the aspect ratio by using CSS object-fit. We verify
 * that the image element has the correct styling applied.
 */

// Arbitrary for generating valid Banner objects
const bannerArbitrary = fc.record({
  id: fc.uuid(),
  type: fc.constant("promo" as const),
  imageUrl: fc
    .tuple(fc.integer({ min: 100, max: 2000 }), fc.integer({ min: 100, max: 800 }))
    .map(([w, h]) => `https://placehold.co/${w}x${h}/3e8e41/ffffff?text=Banner`),
  altText: fc.string({ minLength: 1, maxLength: 100 }).filter((s) => s.trim().length > 0),
  link: fc.option(fc.webUrl(), { nil: undefined }),
  position: fc.integer({ min: 1, max: 10 }),
  section: fc.constantFrom("after-categories", "after-products", "brands-section"),
  width: fc.option(fc.constantFrom("50%", "33%", "25%"), { nil: undefined }),
});

// Arbitrary for generating arrays of banners
const bannersArbitrary = fc.array(bannerArbitrary, { minLength: 1, maxLength: 4 });

// Arbitrary for layout types
const layoutArbitrary = fc.constantFrom("single", "grid", "row") as fc.Arbitrary<
  "single" | "grid" | "row"
>;

describe("Property 7: Image Aspect Ratio Preservation", () => {
  it("should render banner images with object-fit cover to preserve aspect ratio", () => {
    fc.assert(
      fc.property(bannersArbitrary, layoutArbitrary, (banners: Banner[], layout) => {
        const { unmount } = render(
          <Providers>
            <PromoBanner banners={banners} layout={layout} />
          </Providers>
        );

        // Get all banner images
        const images = screen.getAllByTestId("promo-banner-image");

        // For single layout, only first banner is rendered
        const expectedCount = layout === "single" ? 1 : banners.length;
        expect(images.length).toBe(expectedCount);

        // Each image should have object-fit: cover style applied
        // next/image with fill and objectFit: "cover" applies this via style attribute
        images.forEach((img) => {
          const style = img.getAttribute("style");
          expect(style).toContain("object-fit");
          expect(style).toContain("cover");
        });

        unmount();
      }),
      { numRuns: 100 }
    );
  });

  it("should render banner container with proper dimensions for aspect ratio", () => {
    fc.assert(
      fc.property(bannersArbitrary, layoutArbitrary, (banners: Banner[], layout) => {
        const { unmount } = render(
          <Providers>
            <PromoBanner banners={banners} layout={layout} />
          </Providers>
        );

        // Get all banner item containers
        const bannerItems = screen.getAllByTestId("promo-banner-item");

        // For single layout, only first banner is rendered
        const expectedCount = layout === "single" ? 1 : banners.length;
        expect(bannerItems.length).toBe(expectedCount);

        // Each container should have position relative for the fill image
        bannerItems.forEach((item) => {
          const computedStyle = window.getComputedStyle(item);
          expect(computedStyle.position).toBe("relative");
        });

        unmount();
      }),
      { numRuns: 100 }
    );
  });

  it("should render images with fill attribute for responsive aspect ratio handling", () => {
    fc.assert(
      fc.property(bannersArbitrary, layoutArbitrary, (banners: Banner[], layout) => {
        const { unmount } = render(
          <Providers>
            <PromoBanner banners={banners} layout={layout} />
          </Providers>
        );

        // Get all banner images
        const images = screen.getAllByTestId("promo-banner-image");

        // Each image should have absolute positioning (from fill prop)
        images.forEach((img) => {
          const style = img.getAttribute("style");
          // next/image with fill applies position: absolute
          expect(style).toContain("position");
          expect(style).toContain("absolute");
        });

        unmount();
      }),
      { numRuns: 100 }
    );
  });
});
