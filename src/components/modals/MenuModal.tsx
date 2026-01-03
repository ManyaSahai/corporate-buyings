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
                p={{ base: 4, md: 6 }}
                maxW={{ base: "90vw", md: "500px" }}
                maxH="80vh"
                overflowY="auto"
                onClick={(e) => e.stopPropagation()}
                shadow="2xl"
                display="inline-block"
                css={{
                    animation: "slideUp 0.3s ease-out",
                    "@keyframes slideUp": {
                        "0%": { opacity: 0, transform: "translateY(20px) scale(0.95)" },
                        "100%": { opacity: 1, transform: "translateY(0) scale(1)" }
                    }
                }}
            >
                <Flex justify="space-between" align="center" mb={4} gap={4}>
                    <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }} color="gray.900">
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

                <VStack gap={2} align="stretch">
                    {subcategories.map((sub) => (
                        <Link key={sub.id} href={sub.href} style={{ textDecoration: "none" }}>
                            <Box
                                p={3}
                                bg="gray.50"
                                rounded="lg"
                                _hover={{
                                    bg: "blue.50",
                                    borderColor: "blue.200",
                                }}
                                border="1px solid"
                                borderColor="gray.200"
                                transition="all 0.2s"
                            >
                                <Flex justify="space-between" align="center" gap={3}>
                                    <Text fontWeight="medium" color="gray.800" fontSize="sm">
                                        {sub.name}
                                    </Text>
                                    {sub.productCount && (
                                        <Text fontSize="xs" color="gray.500" whiteSpace="nowrap">
                                            {sub.productCount} items
                                        </Text>
                                    )}
                                </Flex>
                            </Box>
                        </Link>
                    ))}
                </VStack>

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
