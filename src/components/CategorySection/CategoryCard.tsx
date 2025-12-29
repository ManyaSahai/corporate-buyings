"use client";

import { Box, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Category } from "@/types";

export interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const { name, imageUrl, discount, link } = category;

  const content = (
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
    >
      {/* Category Image */}
      <Box
        position="relative"
        width="100%"
        height="120px"
        borderRadius="xl"
        overflow="hidden"
      >
        <Image
          src={imageUrl}
          alt={name}
          fill
          style={{ objectFit: "contain" }}
          data-testid="category-image"
        />
      </Box>

      {/* Category Name */}
      <Text
        fontSize="sm"
        fontWeight="medium"
        color="text.default"
        textAlign="center"
        lineClamp={2}
        data-testid="category-name"
      >
        {name}
      </Text>
    </VStack>
  );

  return (
    <Box height="100%">
      {link ? (
        <Link href={link} style={{ display: "block", height: "100%" }}>
          {content}
        </Link>
      ) : (
        content
      )}

      {/* View All for category (links to products page) */}
      <Box mt={2} textAlign="center">
        <Link href="/products">
          <Text
            as="a"
            fontSize="xs"
            color="brand.primary"
            fontWeight={"medium"}
            _hover={{ textDecoration: "underline" }}
          >
            View All
          </Text>
        </Link>
      </Box>
    </Box>
  );
}
