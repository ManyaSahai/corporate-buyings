"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer7 } from "@/components/ui/footer-7";
import {
    Box,
    Flex,
    Text,
    Container,
    Grid,
    Heading,
    VStack,
    HStack,
    Input,
    InputGroup,
    Button,
} from "@chakra-ui/react";
import { FiSearch, FiFilter } from "react-icons/fi";
import { BG_COLOR, THEME_SOLID } from "@/lib/colors";

// Mock brand data
const brandData: Record<
    string,
    {
        name: string;
        description: string;
        logo: string;
        products: {
            id: string;
            title: string;
            image: string;
            category: string;
        }[];
    }
> = {
    "1": {
        name: "Camlin",
        description: "Leading manufacturer of art and office supplies since 1931",
        logo: "/brands/1.png",
        products: [
            { id: "1", title: "Camlin Marker Pen Easily Erasable - Red", image: "/img/1.webp", category: "Marker Pens" },
            { id: "2", title: "Camlin Marker Ink-Black-Pack of 3", image: "/img/2.webp", category: "Marker Refill" },
            { id: "3", title: "Camlin Marker Ink-Black-Pack of 2", image: "/img/3.webp", category: "Marker Refill" },
            { id: "4", title: "Camlin Brush Pens - 24 Shades", image: "/img/4.webp", category: "Brush Pens" },
            { id: "5", title: "Camlin Kokuyo White Board Marker Pen", image: "/img/5.webp", category: "Whiteboard Marker" },
            { id: "6", title: "Camlin Kokuyo Pb White Board Marker", image: "/img/6.webp", category: "Whiteboard Marker" },
        ],
    },
    "2": {
        name: "3M",
        description: "Global leader in adhesives, abrasives and safety products",
        logo: "/brands/2.png",
        products: [
            { id: "1", title: "3M Post-it Notes", image: "/img/1.webp", category: "Office Supplies" },
            { id: "2", title: "3M Scotch Tape", image: "/img/2.webp", category: "Office Supplies" },
        ],
    },
};

// Categories for filter (extracted from products)
const categories = [
    "Marker Pens (2)",
    "Marker Refill (2)",
    "Brush Pens (1)",
    "Whiteboard Marker (2)",
    "Office Supplies (4)",
];

// Sidebar Component
const SidebarContent = () => (
    <VStack gap={6} align="start" w="full">
        {/* Categories Section */}
        <Box bg="white" p={5} rounded="2xl" shadow="sm" w="full">
            <Flex justify="space-between" align="center" mb={4}>
                <Text fontWeight="bold" fontSize="lg">
                    Categories
                </Text>
                <Text fontSize="xs" color="gray.500">
                    0 selected
                </Text>
            </Flex>

            <InputGroup mb={3}>
                <Input placeholder="Search categories..." borderRadius="2xl" />
            </InputGroup>

            <VStack gap={2} align="start" maxH="250px" overflowY="auto" pr={2}>
                {categories.map((cat, i) => (
                    <HStack key={i} gap={2} cursor="pointer">
                        <input type="checkbox" />
                        <Text fontSize="sm" color="gray.700">
                            {cat}
                        </Text>
                    </HStack>
                ))}
            </VStack>
        </Box>

        {/* Reset Button */}
        <Button
            w="full"
            bg={THEME_SOLID}
            color="white"
            _hover={{ opacity: 0.9 }}
            size="md"
        >
            Reset All Filters
        </Button>
    </VStack>
);

export default function BrandPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = React.use(params);
    const brand = brandData[id] || brandData["1"];
    const [showFilters, setShowFilters] = useState(false);

    return (
        <Box minH="100vh" bg={BG_COLOR}>
            <Header />

            {/* Hero Banner */}
            <Box
                h={{ base: "180px", md: "250px" }}
                bg="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                borderBottom="1px solid"
                borderColor="gray.200"
            >
                <Box
                    w="120px"
                    h="80px"
                    mb={4}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <img
                        src={brand.logo}
                        alt={brand.name}
                        style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                    />
                </Box>
                <Text
                    fontSize={{ base: "2xl", md: "4xl" }}
                    fontWeight="bold"
                    color="gray.900"
                >
                    {brand.name}
                </Text>
                <Text color="gray.600" mt={2} textAlign="center" px={4}>
                    {brand.description}
                </Text>
            </Box>

            <Container maxW="8xl" px={{ base: 4, md: 8 }} py={12}>
                {/* Breadcrumb */}
                <Flex gap={2} mb={8} fontSize="sm" color="gray.600">
                    <Link href="/" style={{ color: "#3182CE" }}>Home</Link>
                    <Text>/</Text>
                    <Text fontWeight="medium" color="gray.900">{brand.name}</Text>
                </Flex>

                {/* Mobile Filter Toggle */}
                <Button
                    display={{ base: "flex", lg: "none" }}
                    onClick={() => setShowFilters(!showFilters)}
                    bg={THEME_SOLID}
                    color="white"
                    mb={4}
                    _hover={{ opacity: 0.9 }}
                >
                    <FiFilter style={{ marginRight: "8px" }} />
                    Show Filters
                </Button>

                <Flex gap={8} align="start">
                    {/* Sidebar (Desktop) */}
                    <Box
                        w="280px"
                        display={{ base: "none", lg: "block" }}
                        position="sticky"
                        top="20px"
                    >
                        <SidebarContent />
                    </Box>

                    {/* Main Content */}
                    <Box flex="1">
                        {/* Top Bar: Search & Sort */}
                        <Flex
                            justify="space-between"
                            wrap="wrap"
                            gap={4}
                            mb={6}
                            bg="white"
                            p={4}
                            rounded="2xl"
                            shadow="sm"
                        >
                            <Box position="relative" maxW="400px" w="full">
                                <Input
                                    placeholder="Search products..."
                                    borderRadius="2xl"
                                    bg="gray.50"
                                    border="none"
                                    pl={10}
                                />
                                <Box
                                    position="absolute"
                                    left={3}
                                    top="50%"
                                    transform="translateY(-50%)"
                                >
                                    <FiSearch color="gray.400" />
                                </Box>
                            </Box>

                            <select
                                style={{
                                    width: "200px",
                                    borderRadius: "8px",
                                    padding: "8px",
                                    backgroundColor: "#F7FAFC",
                                    border: "none",
                                }}
                            >
                                <option>Default Sorting</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest First</option>
                            </select>
                        </Flex>

                        {/* Products Section */}
                        <Heading as="h2" fontSize="xl" mb={6} color="gray.900">
                            Products by {brand.name} ({brand.products.length} products)
                        </Heading>
                        <Grid
                            templateColumns={{
                                base: "repeat(2, 1fr)",
                                sm: "repeat(2, 1fr)",
                                lg: "repeat(3, 1fr)",
                            }}
                            gap={6}
                        >
                            {brand.products.map((product) => (
                                <Link key={product.id} href={`/products/${product.id}`} style={{ textDecoration: "none" }}>
                                    <Box
                                        bg="white"
                                        rounded="2xl"
                                        shadow="sm"
                                        overflow="hidden"
                                        transition="all 0.3s"
                                        _hover={{
                                            transform: "translateY(-5px)",
                                            shadow: "lg",
                                        }}
                                        border="1px solid"
                                        borderColor="gray.100"
                                    >
                                        <Box p={4} display="flex" justifyContent="center" bg="white" h="180px" alignItems="center">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                                            />
                                        </Box>
                                        <Box p={4}>
                                            <Text fontSize="xs" color="gray.500" mb={1}>
                                                {product.category}
                                            </Text>
                                            <Text
                                                fontWeight="medium"
                                                fontSize="sm"
                                                mb={2}
                                                color="gray.800"
                                                style={{
                                                    WebkitLineClamp: 2,
                                                    display: "-webkit-box",
                                                    WebkitBoxOrient: "vertical",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                {product.title}
                                            </Text>
                                        </Box>
                                    </Box>
                                </Link>
                            ))}
                        </Grid>
                    </Box>
                </Flex>
            </Container>

            <Footer7 />
        </Box>
    );
}

