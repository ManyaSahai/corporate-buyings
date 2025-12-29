"use client";

import { Box, Grid, GridItem, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { PromoBannerProps, Banner } from "@/types";

interface BannerItemProps {
  banner: Banner;
}

function BannerItem({ banner }: BannerItemProps) {
  const { imageUrl, altText, link } = banner;

  const imageContent = (
    <Box
      position="relative"
      width="100%"
      height="100%"
      minHeight="150px"
      borderRadius="2xl"
      overflow="hidden"
      transition="all 0.2s ease"
      _hover={{
        transform: "scale(1.01)",
        boxShadow: "md",
      }}
      data-testid="promo-banner-item"
    >
      <Image
        src={imageUrl}
        alt={altText}
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1400px"
        data-testid="promo-banner-image"
      />
    </Box>
  );

  if (link) {
    return (
      <a
        href={link}
        style={{ display: "block", width: "100%", height: "100%" }}
      >
        {imageContent}
      </a>
    );
  }

  return imageContent;
}

export function PromoBanner({ banners, layout }: PromoBannerProps) {
  if (!banners || banners.length === 0) {
    return null;
  }

  const renderSingleLayout = () => (
    <Box width="100%" height="200px">
      <BannerItem banner={banners[0]} />
    </Box>
  );

  const renderGridLayout = () => (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
      }}
      gap={4}
    >
      {banners.map((banner) => (
        <GridItem key={banner.id} height="200px">
          <BannerItem banner={banner} />
        </GridItem>
      ))}
    </Grid>
  );

  const renderRowLayout = () => (
    <Flex direction={{ base: "column", md: "row" }} gap={4} width="100%">
      {banners.map((banner) => (
        <Box
          key={banner.id}
          flex={banner.width ? `0 0 ${banner.width}` : "1"}
          height="200px"
        >
          <BannerItem banner={banner} />
        </Box>
      ))}
    </Flex>
  );

  return (
    <Box
      as="section"
      py={4}
      px={{ base: 2, md: 4 }}
      width="100%"
      data-testid="promo-banner-section"
    >
      {layout === "single" && renderSingleLayout()}
      {layout === "grid" && renderGridLayout()}
      {layout === "row" && renderRowLayout()}
    </Box>
  );
}
