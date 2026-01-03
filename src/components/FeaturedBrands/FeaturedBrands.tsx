"use client";

import { Box, Flex, Heading, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

interface FeaturedBrand {
  name: string;
  logoUrl: string;
  link: string;
}

interface FeaturedBrandsProps {
  brands?: FeaturedBrand[];
}

// Default featured brands
const defaultBrands: FeaturedBrand[] = [
  { name: "Camlin", logoUrl: "/brands/1.png", link: "/products?brand=Camlin" },
  { name: "3M", logoUrl: "/brands/2.png", link: "/products?brand=3M" },
  { name: "Philips", logoUrl: "/brands/3.png", link: "/products?brand=Philips" },
  { name: "Havells", logoUrl: "/brands/4.png", link: "/products?brand=Havells" },
  { name: "Crompton", logoUrl: "/brands/5.png", link: "/products?brand=Crompton" },
  { name: "Syska", logoUrl: "/brands/6.png", link: "/products?brand=Syska" },
];

export function FeaturedBrands({ brands = defaultBrands }: FeaturedBrandsProps) {
  // Display 6 brands
  const displayBrands = brands.slice(0, 6);

  return (
    <Box
      as="section"
      paddingY={8}
      paddingX={{ base: 4, md: 6, lg: 8 }}
      backgroundColor="transparent"
    >
      {/* Section Header */}
      <Flex justifyContent="space-between" alignItems="center" marginBottom={6}>
        <Heading
          as="h2"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          color="text.default"
        >
          Featured Brands
        </Heading>
        
      </Flex>

      {/* Brands Grid */}
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(6, 1fr)",
        }}
        gap={4}
      >
        {displayBrands.map((brand, index) => (
          <Link key={index} href={brand.link}>
            <Box
              bg="white"
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
              p={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              height="140px"
              transition="all 0.2s ease"
              _hover={{
                boxShadow: "lg",
                borderColor: "brand.primary",
                transform: "translateY(-4px)",
              }}
              cursor="pointer"
            >
              <Box
                position="relative"
                width="100%"
                height="80px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src={brand.logoUrl}
                  alt={brand.name}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Text
                fontSize="sm"
                fontWeight="medium"
                color="gray.700"
                mt={2}
                textAlign="center"
              >
                {brand.name}
              </Text>
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  );
}
