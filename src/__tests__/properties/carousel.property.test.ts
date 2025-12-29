import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { getNextSlideIndex, getSlideIndexFromDot } from "@/components/HeroBanner/Carousel";

/**
 * **Feature: cbshop, Property 1: Carousel Navigation Consistency**
 * **Validates: Requirements 2.3**
 *
 * For any carousel with N slides and any current slide index,
 * clicking the "next" button should result in index (current + 1) % N,
 * and clicking "prev" should result in index (current - 1 + N) % N.
 */
describe("Property 1: Carousel Navigation Consistency", () => {
  it("should navigate to next slide correctly for any valid state", () => {
    fc.assert(
      fc.property(
        // Generate total slides (at least 1)
        fc.integer({ min: 1, max: 100 }),
        // Generate current index (will be constrained to valid range)
        fc.integer({ min: 0, max: 99 }),
        (totalSlides, rawCurrentIndex) => {
          // Constrain current index to valid range
          const currentIndex = rawCurrentIndex % totalSlides;

          const result = getNextSlideIndex(currentIndex, totalSlides, "next");
          const expected = (currentIndex + 1) % totalSlides;

          expect(result).toBe(expected);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("should navigate to previous slide correctly for any valid state", () => {
    fc.assert(
      fc.property(
        // Generate total slides (at least 1)
        fc.integer({ min: 1, max: 100 }),
        // Generate current index (will be constrained to valid range)
        fc.integer({ min: 0, max: 99 }),
        (totalSlides, rawCurrentIndex) => {
          // Constrain current index to valid range
          const currentIndex = rawCurrentIndex % totalSlides;

          const result = getNextSlideIndex(currentIndex, totalSlides, "prev");
          const expected = (currentIndex - 1 + totalSlides) % totalSlides;

          expect(result).toBe(expected);
        }
      ),
      { numRuns: 100 }
    );
  });
});


/**
 * **Feature: cbshop, Property 2: Pagination Dot Navigation**
 * **Validates: Requirements 2.4**
 *
 * For any carousel with N slides and any dot index i (where 0 <= i < N),
 * clicking dot i should set the current slide to exactly i.
 */
describe("Property 2: Pagination Dot Navigation", () => {
  it("should navigate to exact slide index when clicking valid dot", () => {
    fc.assert(
      fc.property(
        // Generate total slides (at least 1)
        fc.integer({ min: 1, max: 100 }),
        // Generate dot index (will be constrained to valid range)
        fc.integer({ min: 0, max: 99 }),
        (totalSlides, rawDotIndex) => {
          // Constrain dot index to valid range
          const dotIndex = rawDotIndex % totalSlides;

          const result = getSlideIndexFromDot(dotIndex, totalSlides);

          // Clicking dot i should set slide to exactly i
          expect(result).toBe(dotIndex);
        }
      ),
      { numRuns: 100 }
    );
  });

  it("should clamp out-of-bounds dot indices to valid range", () => {
    fc.assert(
      fc.property(
        // Generate total slides (at least 1)
        fc.integer({ min: 1, max: 100 }),
        // Generate out-of-bounds dot index (negative or >= totalSlides)
        fc.oneof(
          fc.integer({ min: -100, max: -1 }),
          fc.integer({ min: 100, max: 200 })
        ),
        (totalSlides, outOfBoundsDotIndex) => {
          const result = getSlideIndexFromDot(outOfBoundsDotIndex, totalSlides);

          // Result should be within valid range [0, totalSlides - 1]
          expect(result).toBeGreaterThanOrEqual(0);
          expect(result).toBeLessThan(totalSlides);
        }
      ),
      { numRuns: 100 }
    );
  });
});
