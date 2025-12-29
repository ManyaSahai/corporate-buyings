"use client";

import { Box, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { Brand } from "@/types";

export interface BrandCardProps {
  brand: Brand;
}

// Fixed dimensions for consistent sizing across all brand cards
export const BRAND_CARD_WIDTH = 150;
export const BRAND_CARD_HEIGHT = 130;
export const BRAND_LOGO_SIZE = 100;

export function BrandCard({ brand }: BrandCardProps) {
  const { name, logoUrl, link } = brand;

  const cardContent = (
    <VStack
      gap={2}
      padding={3}
      borderRadius="2xl"
      backgroundColor="bg.default"
      border="1px solid"
      borderColor="border.default"
      transition="all 0.2s ease"
      _hover={{
        boxShadow: "md",
        borderColor: "brand.primary",
        transform: "translateY(-2px)",
      }}
      cursor="pointer"
      width={`${BRAND_CARD_WIDTH}px`}
      height={`${BRAND_CARD_HEIGHT}px`}
      justifyContent="center"
      alignItems="center"
      data-testid="brand-card"
    >
      {/* Brand Logo */}
      <Box
        position="relative"
        width={`${BRAND_LOGO_SIZE}px`}
        height={`${BRAND_LOGO_SIZE}px`}
        borderRadius="xl"
        overflow="hidden"
        data-testid="brand-logo-container"
      >
        <Image
          src={logoUrl}
          alt={name}
          fill
          style={{ objectFit: "contain" }}
          data-testid="brand-logo"
        />
      </Box>

      {/* Brand Name */}
      <Text
        fontSize="xs"
        fontWeight="medium"
        color="text.default"
        textAlign="center"
        lineClamp={1}
        data-testid="brand-name"
      >
        {name}
      </Text>
    </VStack>
  );

  if (link) {
    return (
      <a href={link} style={{ display: "block" }}>
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
