"use client";

import { Box, Flex, Heading, Grid, IconButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Category, CategorySectionProps } from "@/types";
import { CategoryCard } from "./CategoryCard";
import { BG_COLOR } from "@/lib/colors";

export function CategorySection({
  title,
  categories,
  layout,
  columns = 6,
}: CategorySectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (categories.length > 0) {
      setCanScrollRight(true);
    }
  }, [categories.length]);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 300;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (categories.length === 0) {
    return null;
  }

  // Determine which categories to show based on expansion state (only for grid layout)
  const visibleCategories =
    layout === "grid" && !isExpanded
      ? categories.slice(0, columns * 2) // Show 2 rows initially (assuming 2 rows is a good default preview) or just 1 row? User said "top categories to just expand", implying some are hidden. Let's aim for 1 row if many cols, or 2 if few. Let's stick to 'columns' count * 2 for now as a safe default or maybe just 'columns'. The user image shows 12 items initially, then a button. 12 items is likely 2 rows of 6. Let's try 12 as default or maybe dynamically calculate.
      : // Re-reading user request: "show subcategory name and its 4 products... and below it will be the products of that category". Wait, that was the previous request. This request is "I want top categories to just expand like that". "That" refers to the moglix link or just the idea. The provided screenshots show "Shop by Categories (12)" with 12 items visible. Then "View Less Categories" button.
        // So let's show all initially? No, the user wants "expand like that". The "view all" link usually implies partial view.
        // Let's default to showing 1 row (columns count).
        categories;

  // Actually, looking at the user provided screenshot (uploaded_image_1_...), it shows "Shop by Categories (12)" and 12 items before clicking "View Less". Wait, "View Less" implies it IS expanded.
  // The first screenshot (uploaded_image_0_...) shows 7 items in a row (scrolling?) or maybe just 7 items fitting? It looks like a carousel.
  // But the user said "Not a separate page. I want top categories to just expand".
  // And "this is how they want it to function ig" refers to the images.
  // Image 0: Single row of categories.
  // Image 1: Multiple rows of categories and a "VIEW LESS CATEGORIES" button.
  // This implies the DEFAULT state is collapsed (Image 0 seems like a carousel or single row), and EXPANDED state is multiple rows (Image 1).
  // The current implementation supports 'scroll' layout (carousel) and 'grid' layout.
  // Ideally we want to switch between 'scroll' (collapsed) and 'grid' (expanded)?
  // OR just 'grid' with limited rows vs 'grid' with all rows.
  // If we look at `src/app/page.tsx`, `CategorySection` is used with `layout="grid"` for the first one (actually data/categories.ts defines layout).
  // Let's assume layout="grid" is what we are modifying to be expandable.

  // Initial Visible Count:
  // If we want to mimic the behaviour:
  // Collapsed: Show 1 row (column count).
  // Expanded: Show all.

  // However, if the current layout is "scroll", we might want to keep it scrollable?
  // The user's screenshot 1 has a scrollbar-like look or just items. Wait, Image 0 has arrows? No, just items.
  // Let's assume we modify the 'grid' layout to support this expansion.

  const itemsToShow =
    layout === "grid" && !isExpanded
      ? categories.slice(0, columns * 2)
      : categories;

  return (
    <Box
      as="section"
      paddingY={6}
      paddingX={{ base: 4, md: 6, lg: 8 }}
      backgroundColor="transparent"
    >
      {/* Section Header */}
      <Flex justifyContent="space-between" alignItems="center" marginBottom={4}>
        <Heading
          as="h2"
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="semibold"
          color="text.default"
        >
          {title} ({categories.length})
        </Heading>
        {/* Header View All (always present) */}
        <Link href="/products">
          <Text
            as="a"
            fontSize="sm"
            color="brand.primary"
            fontWeight="medium"
            cursor="pointer"
            _hover={{ textDecoration: "underline" }}
          >
            View All →
          </Text>
        </Link>
      </Flex>

      {/* Grid Layout */}
      {layout === "grid" && (
        <>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg: `repeat(${columns}, 1fr)`,
            }}
            gap={4}
          >
            {itemsToShow.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </Grid>

          {/* View All / View Less Button */}
          {categories.length > columns * 2 && (
            <Flex justifyContent="center" marginTop={6}>
              <Box
                as="button"
                onClick={() => setIsExpanded(!isExpanded)}
                bg="#D9232D" // Using a red color similar to the screenshot
                color="white"
                fontWeight="bold"
                fontSize="sm"
                px={6}
                py={3}
                borderRadius="md"
                _hover={{ bg: "#b01c25" }}
                transition="background-color 0.2s"
                textTransform="uppercase"
              >
                {isExpanded ? "View Less Categories" : "View All Categories"}
              </Box>
            </Flex>
          )}
        </>
      )}

      {/* Horizontal Scroll Layout */}
      {layout === "scroll" && (
        <Box position="relative">
          {/* Left Arrow */}
          {isMounted && canScrollLeft && (
            <IconButton
              aria-label="Scroll left"
              position="absolute"
              left={-4}
              top="50%"
              transform="translateY(-50%)"
              zIndex={2}
              borderRadius="2xl"
              bg="white"
              color="gray.700"
              _hover={{ bg: "gray.100" }}
              boxShadow="md"
              border="1px solid"
              borderColor="gray.200"
              onClick={() => scroll("left")}
              size="sm"
            >
              <ChevronLeftIcon />
            </IconButton>
          )}

          {/* Scrollable Container */}
          <Flex
            ref={scrollContainerRef}
            overflowX="auto"
            gap={4}
            paddingY={2}
            onScroll={handleScroll}
            css={{
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {categories.map((category) => (
              <Box
                key={category.id}
                minWidth="180px"
                maxWidth="180px"
                flexShrink={0}
              >
                <CategoryCard category={category} />
              </Box>
            ))}
          </Flex>

          {/* Right Arrow */}
          {isMounted && canScrollRight && (
            <IconButton
              aria-label="Scroll right"
              position="absolute"
              right={-4}
              top="50%"
              transform="translateY(-50%)"
              zIndex={2}
              borderRadius="2xl"
              bg="white"
              color="gray.700"
              _hover={{ bg: "gray.100" }}
              boxShadow="md"
              border="1px solid"
              borderColor="gray.200"
              onClick={() => scroll("right")}
              size="sm"
            >
              <ChevronRightIcon />
            </IconButton>
          )}
        </Box>
      )}
    </Box>
  );
}

// Simple chevron icons
function ChevronLeftIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
