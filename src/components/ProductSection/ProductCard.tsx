"use client";

import { Box, Text, VStack, HStack, Badge } from "@chakra-ui/react";
import Image from "next/image";
import { Product } from "@/types";

export interface ProductCardProps {
  product: Product;
}

/**
 * Calculates the discount percentage from original and discounted prices.
 * Returns the percentage as a whole number.
 */
export function calculateDiscountPercent(
  originalPrice: number,
  discountedPrice: number
): number {
  if (originalPrice <= 0 || discountedPrice < 0) return 0;
  if (discountedPrice >= originalPrice) return 0;
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
}

/**
 * Formats a price value to Indian Rupee format.
 */
export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}

export function ProductCard({ product }: ProductCardProps) {
  const {
    name,
    imageUrl,
    originalPrice,
    discountedPrice,
    discountPercent,
    brand,
    rating,
    inStock,
  } = product;

  // Calculate discount percent if discountedPrice is provided but discountPercent is not
  const displayDiscountPercent =
    discountPercent ??
    (discountedPrice !== undefined
      ? calculateDiscountPercent(originalPrice, discountedPrice)
      : undefined);

  const hasDiscount =
    discountedPrice !== undefined && discountedPrice < originalPrice;

  return (
    <VStack
      gap={2}
      padding={3}
      borderRadius="xl"
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
      height="100%"
      position="relative"
      alignItems="stretch"
    >
      {/* Discount Badge */}


      {/* Out of Stock Badge */}
      {!inStock && (
        <Badge
          position="absolute"
          top={2}
          right={2}
          backgroundColor="gray.500"
          color="white"
          fontSize="xs"
          fontWeight="bold"
          paddingX={2}
          paddingY={1}
          borderRadius="xl"
          zIndex={1}
          data-testid="out-of-stock-badge"
        >
          Out of Stock
        </Badge>
      )}

      {/* Product Image */}
      <Box
        position="relative"
        width="100%"
        height="150px"
        borderRadius="2xl"
        overflow="hidden"
        backgroundColor="bg.subtle"
      >
        <Image
          src={imageUrl}
          alt={name}
          fill
          style={{ objectFit: "contain" }}
          data-testid="product-image"
        />
      </Box>

      {/* Brand */}
      {brand && (
        <Text
          fontSize="xs"
          color="text.muted"
          textTransform="uppercase"
          data-testid="product-brand"
        >
          {brand}
        </Text>
      )}

      {/* Product Name */}
      <Text
        fontSize="sm"
        fontWeight="medium"
        color="text.default"
        lineClamp={2}
        data-testid="product-name"
      >
        {name}
      </Text>

      {/* Price Section */}
      {/* Price Section */}


      {/* Rating */}

    </VStack>
  );
}
