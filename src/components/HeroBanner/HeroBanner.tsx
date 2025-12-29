"use client";

import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Carousel } from "./Carousel";
import { SideCards } from "./SideCards";
import { HeroBannerProps } from "@/types";

export function HeroBanner({
  slides,
  sideCards,
  autoPlayInterval = 5000,
}: HeroBannerProps) {
  const hasSideCards = sideCards.length > 0;

  return (
    <Box as="section" py={4} px={{ base: 0, md: 0, lg: 0 }}>
      <Grid
        templateColumns={{
          base: "1fr",
          lg: hasSideCards ? "3fr 1fr" : "1fr",
        }}
        gap={4}
        width="100%"
        px={{ base: 2, md: 4 }}
      >
        {/* Main Carousel */}
        <GridItem>
          <Carousel slides={slides} autoPlayInterval={autoPlayInterval} />
        </GridItem>

        {/* Side Cards - only show on larger screens when cards exist */}
        {hasSideCards && (
          <GridItem display={{ base: "none", lg: "block" }}>
            <SideCards cards={sideCards} />
          </GridItem>
        )}
      </Grid>
    </Box>
  );
}
