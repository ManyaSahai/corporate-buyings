"use client";

import { useState, useEffect, useCallback } from "react";
import { Box, IconButton, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { BannerSlide } from "@/types";

interface CarouselProps {
  slides: BannerSlide[];
  autoPlayInterval?: number;
}

/**
 * Navigation logic for carousel - exported for testing
 * @param currentIndex - Current slide index
 * @param totalSlides - Total number of slides
 * @param direction - 'next' or 'prev'
 * @returns New slide index
 */
export function getNextSlideIndex(
  currentIndex: number,
  totalSlides: number,
  direction: "next" | "prev"
): number {
  if (totalSlides <= 0) return 0;
  if (direction === "next") {
    return (currentIndex + 1) % totalSlides;
  }
  return (currentIndex - 1 + totalSlides) % totalSlides;
}

/**
 * Get slide index from pagination dot click - exported for testing
 * @param dotIndex - Index of clicked dot
 * @param totalSlides - Total number of slides
 * @returns Slide index to navigate to
 */
export function getSlideIndexFromDot(
  dotIndex: number,
  totalSlides: number
): number {
  if (totalSlides <= 0) return 0;
  if (dotIndex < 0) return 0;
  if (dotIndex >= totalSlides) return totalSlides - 1;
  return dotIndex;
}

export function Carousel({ slides, autoPlayInterval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => getNextSlideIndex(prev, slides.length, "next"));
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => getNextSlideIndex(prev, slides.length, "prev"));
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(getSlideIndexFromDot(index, slides.length));
  }, [slides.length]);

  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-rotation effect - only run after component is mounted
  useEffect(() => {
    if (!isMounted || slides.length <= 1 || autoPlayInterval <= 0) return;

    const timer = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isMounted, slides.length, autoPlayInterval, goToNext]);

  if (slides.length === 0) {
    return (
      <Box
        position="relative"
        width="100%"
        paddingTop="32%"
        bg="gray.100"
        borderRadius="2xl"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
      >
        <Box color="gray.500" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">No slides available</Box>
      </Box>
    );
  }

  return (
    <Box position="relative" width="100%" overflow="hidden" borderRadius="2xl">
      {/* Slides Container */}
      <Box
        display="flex"
        transition="transform 0.5s ease-in-out"
        transform={`translateX(-${currentIndex * 100}%)`}
      >
        {slides.map((slide) => (
          <Box
            key={slide.id}
            flexShrink={0}
            width="100%"
            position="relative"
            paddingTop="32%"
          >
            {slide.link ? (
              <a href={slide.link}>
                <Image
                  src={slide.imageUrl}
                  alt={slide.altText}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={slides.indexOf(slide) === 0}
                />
              </a>
            ) : (
              <Image
                src={slide.imageUrl}
                alt={slide.altText}
                fill
                style={{ objectFit: "cover" }}
                priority={slides.indexOf(slide) === 0}
              />
            )}
          </Box>
        ))}
      </Box>

      {/* Navigation Arrows - only show if more than 1 slide */}
      {isMounted && slides.length > 1 && (
        <>
          <IconButton
            aria-label="Previous slide"
            position="absolute"
            left={3}
            top="50%"
            transform="translateY(-50%)"
            onClick={goToPrev}
            bg="whiteAlpha.800"
            color="gray.700"
            _hover={{ bg: "white" }}
            borderRadius="2xl"
            boxShadow="md"
            size="md"
            zIndex={2}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            aria-label="Next slide"
            position="absolute"
            right={3}
            top="50%"
            transform="translateY(-50%)"
            onClick={goToNext}
            bg="whiteAlpha.800"
            color="gray.700"
            _hover={{ bg: "white" }}
            borderRadius="2xl"
            boxShadow="md"
            size="md"
            zIndex={2}
          >
            <ChevronRightIcon />
          </IconButton>
        </>
      )}

      {/* Pagination Dots - only show if more than 1 slide */}
      {slides.length > 1 && (
        <HStack
          position="absolute"
          bottom={4}
          left="50%"
          transform="translateX(-50%)"
          gap={2}
          zIndex={2}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              as="button"
              aria-label={`Go to slide ${index + 1}`}
              width={currentIndex === index ? "24px" : "8px"}
              height="8px"
              borderRadius="2xl"
              bg={currentIndex === index ? "accent.500" : "white"}
              opacity={currentIndex === index ? 1 : 0.7}
              transition="all 0.3s ease"
              onClick={() => goToSlide(index)}
              _hover={{ opacity: 1 }}
              cursor="pointer"
            />
          ))}
        </HStack>
      )}
    </Box>
  );
}

// Simple SVG icons for navigation
function ChevronLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
