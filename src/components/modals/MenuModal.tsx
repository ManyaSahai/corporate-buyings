"use client";

import React from "react";
import Link from "next/link";
import { Box, Flex, Text, VStack, Grid } from "@chakra-ui/react";

interface Subcategory {
    id: string;
    name: string;
    href: string;
    productCount?: number;
}

interface MenuModalProps {
    isOpen: boolean;
    onClose: () => void;
    categoryName: string;
    subcategories: Subcategory[];
}

export function MenuModal({ isOpen, onClose, categoryName, subcategories }: MenuModalProps) {
    if (!isOpen) return null;

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="blackAlpha.600"
            zIndex={1000}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            pt={20}
            onClick={onClose}
        >
            <Box
                bg="white"
                rounded="2xl"
                p={6}
                maxW="600px"
                w="90%"
                maxH="80vh"
                overflowY="auto"
                onClick={(e) => e.stopPropagation()}
            >
                <Flex justify="space-between" align="center" mb={6}>
                    <Text fontWeight="bold" fontSize="xl" color="gray.900">
                        {categoryName}
                    </Text>
                    <Box
                        as="button"
                        onClick={onClose}
                        p={2}
                        cursor="pointer"
                        color="gray.500"
                        _hover={{ color: "gray.700" }}
                    >
                        ✕
                    </Box>
                </Flex>

                <Grid
                    templateColumns={{
                        base: "repeat(2, 1fr)",
                        md: "repeat(3, 1fr)",
                    }}
                    gap={4}
                >
                    {subcategories.map((sub) => (
                        <Link key={sub.id} href={sub.href} style={{ textDecoration: "none" }}>
                            <Box
                                p={4}
                                bg="gray.50"
                                rounded="xl"
                                _hover={{
                                    bg: "blue.50",
                                    borderColor: "blue.200",
                                }}
                                border="1px solid"
                                borderColor="gray.200"
                                transition="all 0.2s"
                            >
                                <Text fontWeight="medium" color="gray.800" mb={1}>
                                    {sub.name}
                                </Text>
                                {sub.productCount && (
                                    <Text fontSize="xs" color="gray.500">
                                        {sub.productCount} products
                                    </Text>
                                )}
                            </Box>
                        </Link>
                    ))}
                </Grid>

                <Box mt={6} textAlign="center">
                    <Link
                        href={`/products`}
                        style={{
                            color: "#3182CE",
                            fontSize: "14px",
                            fontWeight: 500,
                        }}
                    >
                        View All in {categoryName} →
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}
