"use client";

import { Box, Flex, Heading, Grid, IconButton, Text } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { ProductSectionProps } from "@/types";
import { ProductCard } from "./ProductCard";

export function ProductSection({
  title,
  products,
  layout,
  showViewAll = false,
}: ProductSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (products.length > 0) {
      setCanScrollRight(true);
    }
  }, [products.length]);

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

  if (products.length === 0) {
    return null;
  }

  return (
    <>
      <Box
        as="section"
        paddingY={6}
        paddingX={{ base: 4, md: 6, lg: 8 }}
        backgroundColor="transparent"
      >
        {/* Section Header */}
        <Flex
          justifyContent="space-between"
          alignItems="center"
          marginBottom={4}
        >
          <Heading
            as="h2"
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="semibold"
            color="text.default"
          >
            {title}
          </Heading>

          {showViewAll && (
            <Text
              fontSize="sm"
              color="brand.primary"
              fontWeight="medium"
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              View All
            </Text>
          )}
        </Flex>

        {/* Grid Layout */}
        {layout === "grid" && (
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(5, 1fr)",
            }}
            gap={4}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Grid>
        )}

        {/* Carousel Layout */}
        {layout === "carousel" && (
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
              {products.map((product) => (
                <Box
                  key={product.id}
                  minWidth={{ base: "160px", md: "200px", lg: "220px" }}
                  maxWidth={{ base: "160px", md: "200px", lg: "220px" }}
                  flexShrink={0}
                >
                  <ProductCard product={product} />
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
    </>
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
