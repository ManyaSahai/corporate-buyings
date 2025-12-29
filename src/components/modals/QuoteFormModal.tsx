"use client";

import React from "react";
import { Box, Flex, Text, VStack, HStack, Button, Input } from "@chakra-ui/react";

interface QuoteFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    items?: { title: string; quantity: number; price: number }[];
    totalAmount?: number;
}

export function QuoteFormModal({ isOpen, onClose, items = [], totalAmount = 0 }: QuoteFormModalProps) {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Quote request submitted successfully! We will contact you within 24 hours.");
        onClose();
    };

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
            alignItems="center"
            justifyContent="center"
            onClick={onClose}
        >
            <Box
                bg="white"
                rounded="2xl"
                p={8}
                maxW="500px"
                w="90%"
                maxH="90vh"
                overflowY="auto"
                onClick={(e) => e.stopPropagation()}
            >
                <Flex justify="space-between" align="center" mb={2}>
                    <Text fontWeight="bold" fontSize="xl" color="gray.900">
                        Request For Quote
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

                {items.length > 0 && (
                    <Text fontSize="sm" color="gray.600" mb={6}>
                        {items.length} items • Estimated Total: ₹{totalAmount.toLocaleString()}
                    </Text>
                )}

                <VStack as="form" onSubmit={handleSubmit} gap={4}>
                    <Box w="full">
                        <Text fontSize="sm" fontWeight="medium" mb={2} color="gray.700">
                            Full Name *
                        </Text>
                        <Input
                            required
                            placeholder="John Doe"
                            bg="gray.50"
                        />
                    </Box>

                    <Box w="full">
                        <Text fontSize="sm" fontWeight="medium" mb={2} color="gray.700">
                            Email Address *
                        </Text>
                        <Input
                            type="email"
                            required
                            placeholder="john@company.com"
                            bg="gray.50"
                        />
                    </Box>

                    <Box w="full">
                        <Text fontSize="sm" fontWeight="medium" mb={2} color="gray.700">
                            Phone Number *
                        </Text>
                        <Input
                            type="tel"
                            required
                            placeholder="+91 86555 98711"
                            bg="gray.50"
                        />
                    </Box>

                    <Box w="full">
                        <Text fontSize="sm" fontWeight="medium" mb={2} color="gray.700">
                            Company Name *
                        </Text>
                        <Input
                            required
                            placeholder="Your Company Ltd."
                            bg="gray.50"
                        />
                    </Box>

                    <Box w="full">
                        <Text fontSize="sm" fontWeight="medium" mb={2} color="gray.700">
                            Delivery Location
                        </Text>
                        <Input
                            placeholder="City, State"
                            bg="gray.50"
                        />
                    </Box>

                    <Box w="full">
                        <Text fontSize="sm" fontWeight="medium" mb={2} color="gray.700">
                            Additional Requirements
                        </Text>
                        <Input
                            as="textarea"
                            placeholder="Any specific requirements, delivery timeline, etc."
                            minH="80px"
                            py={2}
                            bg="gray.50"
                        />
                    </Box>

                    <HStack w="full" gap={3} mt={2}>
                        <Button flex={1} variant="outline" onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            flex={1}
                            bg="#4299E1"
                            color="white"
                            type="submit"
                            _hover={{ opacity: 0.9 }}
                        >
                            Submit Request
                        </Button>
                    </HStack>
                </VStack>
            </Box>
        </Box>
    );
}
