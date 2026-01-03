"use client";

import { Box, Flex, Text, Grid, GridItem, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MegaMenuData } from "@/types";

interface MegaMenuProps {
  data: MegaMenuData;
}

const MotionBox = motion.create(Box as React.ComponentType<any>);

export function MegaMenu({ data }: MegaMenuProps) {
  const columnCount = Math.min(data.categories.length, 4);

  return (
    <MotionBox
      position="absolute"
      top="100%"
      left="0"
      width="fit-content"
      maxW="90vw"
      bg="white"
      boxShadow="0 4px 20px rgba(0, 0, 0, 0.15)"
      borderTop="1px solid"
      borderColor="gray.200"
      borderRadius="0 0 16px 16px"
      zIndex={1100}
      py={6}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Box maxW="1400px" mx="auto" px={8}>
        <Grid
          templateColumns={`repeat(${columnCount}, 1fr)`}
          gap={8}
        >
          {data.categories.map((category, index) => (
            <GridItem key={index}>
              <Text
                fontWeight="700"
                fontSize="13px"
                color="gray.900"
                mb={3}
                pb={2}
                borderBottom="2px solid"
                borderColor="#E84A3D"
                textTransform="uppercase"
                letterSpacing="0.5px"
              >
                {category.title}
              </Text>
              <Flex direction="column" gap={2}>
                {category.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.href}
                    fontSize="13px"
                    color="gray.600"
                    _hover={{
                      color: "#2A348C",
                      textDecoration: "none",
                      pl: 1,
                    }}
                    transition="all 0.15s ease"
                  >
                    {item.label}
                  </Link>
                ))}
              </Flex>
            </GridItem>
          ))}
        </Grid>

        {data.featuredImage && (
          <Box mt={4} pt={4} borderTop="1px solid" borderColor="gray.100">
            <img
              src={data.featuredImage}
              alt="Featured"
              style={{
                width: "100%",
                borderRadius: "8px",
              }}
            />
          </Box>
        )}
      </Box>
    </MotionBox>
  );
}
