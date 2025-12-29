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
    VStack,
    HStack,
    Heading,
    Input,
    InputGroup,
    Button,
} from "@chakra-ui/react";
import { FiSearch, FiFilter } from "react-icons/fi";
import { BG_COLOR, THEME_SOLID } from "@/lib/colors";

// Mock category data
const categoryData: Record<
    string,
    {
        name: string;
        description: string;
        subcategories: {
            id: string;
            name: string;
            products: {
                id: string;
                title: string;
                image: string;
                brand: string;
            }[];
        }[];
        products: {
            id: string;
            title: string;
            image: string;
            brand: string;
        }[];
    }
> = {
    "1": {
        name: "Power Tools",
        description: "Professional-grade power tools for industrial and commercial use",
        subcategories: [
            {
                id: "1-1",
                name: "Drills",
                products: [
                    { id: "101", title: "Bosch GSB 501 500W Professional Impact Drill", image: "/img/1.webp", brand: "Bosch" },
                    { id: "102", title: "Black+Decker KR554RE 550W 13mm VSR Reversible Impact Drill", image: "/img/2.webp", brand: "Black+Decker" },
                    { id: "103", title: "Dewalt DWD024 750W 13mm Impact Drill", image: "/img/3.webp", brand: "Dewalt" },
                    { id: "104", title: "Makita Hp1630 710W 5/8inch Hammer Drill", image: "/img/4.webp", brand: "Makita" },
                ]
            },
            {
                id: "1-2",
                name: "Grinders",
                products: [
                    { id: "201", title: "Bosch GWS 600 Professional Angle Grinder", image: "/img/5.webp", brand: "Bosch" },
                    { id: "202", title: "Stanley STGS9100 900W 100mm Small Angle Grinder", image: "/img/6.webp", brand: "Stanley" },
                    { id: "203", title: "Dewalt DW801 850W 100mm Heavy Duty Angle Grinder", image: "/img/1.webp", brand: "Dewalt" },
                    { id: "204", title: "Makita 9553NB 710W 4 inch Angle Grinder", image: "/img/2.webp", brand: "Makita" },
                ]
            },
            {
                id: "1-3",
                name: "Sanders",
                products: [
                    { id: "301", title: "Bosch GSS 2300 Professional Orbital Sander", image: "/img/3.webp", brand: "Bosch" },
                    { id: "302", title: "Stanley SS30 300W Sheet Sander", image: "/img/4.webp", brand: "Stanley" },
                    { id: "303", title: "Dewalt DWE6411 1/4 Sheet Orbital Sander", image: "/img/5.webp", brand: "Dewalt" },
                    { id: "304", title: "Makita BO3710 190W Finishing Sander", image: "/img/6.webp", brand: "Makita" },
                ]
            },
        ],
        products: [
            { id: "1", title: "Camlin Marker Pen Easily Erasable", image: "/img/1.webp", brand: "Camlin" },
            { id: "2", title: "Camlin Marker Ink-Black-Pack of 3", image: "/img/2.webp", brand: "Camlin" },
            { id: "3", title: "Camlin Marker Ink-Black-Pack of 2", image: "/img/3.webp", brand: "Camlin" },
            { id: "4", title: "Camlin Brush Pens - 24 Shades", image: "/img/4.webp", brand: "Camlin" },
            { id: "5", title: "Camlin Kokuyo White Board Marker Pen", image: "/img/5.webp", brand: "Camlin" },
            { id: "6", title: "Camlin Kokuyo Pb White Board Marker", image: "/img/6.webp", brand: "Camlin" },
            { id: "7", title: "Product 7", image: "/img/1.webp", brand: "Brand A" },
            { id: "8", title: "Product 8", image: "/img/2.webp", brand: "Brand B" },
            { id: "9", title: "Product 9", image: "/img/3.webp", brand: "Brand C" },
            { id: "10", title: "Product 10", image: "/img/4.webp", brand: "Brand D" },
            { id: "11", title: "Product 11", image: "/img/5.webp", brand: "Brand E" },
            { id: "12", title: "Product 12", image: "/img/6.webp", brand: "Brand F" },
        ],
    },
    "2": {
        name: "Hand Tools",
        description: "Quality hand tools for precise work and everyday tasks",
        subcategories: [
            {
                id: "2-1",
                name: "Wrenches",
                products: [
                    { id: "401", title: "Taparia 1171-8 Adjustable Spanner", image: "/img/1.webp", brand: "Taparia" },
                    { id: "402", title: "Stanley 70-964E Double Open End Spanner Set", image: "/img/2.webp", brand: "Stanley" },
                    { id: "403", title: "Venus V-234 12 Pc Combination Spanner Set", image: "/img/3.webp", brand: "Venus" },
                    { id: "404", title: "Eastman E-2008 Double Ended Spanner Set", image: "/img/4.webp", brand: "Eastman" },
                ]
            },
        ],
        products: [
            { id: "5", title: "Camlin Kokuyo White Board Marker Pen", image: "/img/5.webp", brand: "Camlin" },
            { id: "6", title: "Camlin Kokuyo Pb White Board Marker", image: "/img/6.webp", brand: "Camlin" },
        ],
    },
};

// Using THEME_SOLID from @/lib/colors

// Brands for filter
const brands = [
    "Bosch (4)",
    "Black+Decker (2)",
    "Dewalt (3)",
    "Makita (3)",
    "Stanley (2)",
    "Camlin (6)",
    "Taparia (1)",
];

// Sidebar Component
const SidebarContent = () => (
    <VStack gap={6} align="start" w="full">
        {/* Brands Section */}
        <Box bg="white" p={5} rounded="2xl" shadow="sm" w="full">
            <Flex justify="space-between" align="center" mb={4}>
                <Text fontWeight="bold" fontSize="lg">
                    Brands
                </Text>
                <Text fontSize="xs" color="gray.500">
                    0 selected
                </Text>
            </Flex>

            <InputGroup mb={3}>
                <Input placeholder="Search brands..." borderRadius="2xl" />
            </InputGroup>

            <VStack gap={2} align="start" maxH="250px" overflowY="auto" pr={2}>
                {brands.map((brand, i) => (
                    <HStack key={i} gap={2} cursor="pointer">
                        <input type="checkbox" />
                        <Text fontSize="sm" color="gray.700">
                            {brand}
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

export default function CategoryPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = React.use(params);
    const category = categoryData[id] || categoryData["1"];
    const [showFilters, setShowFilters] = useState(false);

    return (
        <Box minH="100vh" bg={BG_COLOR}>
            <Header />

            {/* Hero Banner */}
            <Box
                h={{ base: "150px", md: "200px" }}
                bg={THEME_SOLID}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
            >
                <Text
                    fontSize={{ base: "2xl", md: "4xl" }}
                    fontWeight="bold"
                    color="white"
                >
                    {category.name}
                </Text>
                <Text color="whiteAlpha.800" mt={2}>
                    {category.description}
                </Text>
            </Box>

            <Container maxW="8xl" px={{ base: 4, md: 8 }} py={12}>
                {/* Breadcrumb */}
                <Flex gap={2} mb={8} fontSize="sm" color="gray.600">
                    <Link href="/" style={{ color: "#3182CE" }}>Home</Link>
                    <Text>/</Text>
                    <Text fontWeight="medium" color="gray.900">{category.name}</Text>
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

                        {/* Subcategories Section */}
                        <Box mb={12}>
                            <VStack gap={10} align="stretch">
                                {category.subcategories.map((sub) => (
                                    <Box key={sub.id}>
                                        <Flex justifyContent="space-between" alignItems="center" mb={4}>
                                            <Heading as="h3" fontSize="xl" color="gray.900">
                                                {sub.name}
                                            </Heading>
                                            <Link href={`/category/${sub.id}`} style={{ textDecoration: 'none' }}>
                                                <Text
                                                    color={THEME_SOLID}
                                                    fontWeight="bold"
                                                    fontSize="sm"
                                                    _hover={{ textDecoration: "underline" }}
                                                >
                                                    View All
                                                </Text>
                                            </Link>
                                        </Flex>
                                        <Grid
                                            templateColumns={{
                                                base: "repeat(2, 1fr)",
                                                md: "repeat(4, 1fr)",
                                            }}
                                            gap={6}
                                        >
                                            {sub.products.slice(0, 4).map((product) => (
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
                                                        <Box p={4} display="flex" justifyContent="center" bg="white" h="150px" alignItems="center">
                                                            <img
                                                                src={product.image}
                                                                alt={product.title}
                                                                style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                                                            />
                                                        </Box>
                                                        <Box p={4}>
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
                                ))}
                            </VStack>
                        </Box>

                        {/* Products Section */}
                        <Box>
                            <Heading as="h2" fontSize="2xl" mb={6} color="gray.900">
                                Products in {category.name}
                            </Heading>
                            <Grid
                                templateColumns={{
                                    base: "repeat(2, 1fr)",
                                    md: "repeat(3, 1fr)",
                                }}
                                gap={6}
                                mb={8}
                            >
                                {category.products.map((product) => (
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
                                            <Box p={4} display="flex" justifyContent="center" bg="white" h="150px" alignItems="center">
                                                <img
                                                    src={product.image}
                                                    alt={product.title}
                                                    style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                                                />
                                            </Box>
                                            <Box p={4}>
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

                            {/* Pagination / Load More */}
                            <Flex justifyContent="center">
                                <Box
                                    as="button"
                                    bg="white"
                                    border="1px solid"
                                    borderColor="gray.200"
                                    px={8}
                                    py={2}
                                    rounded="full"
                                    fontWeight="medium"
                                    color="gray.600"
                                    _hover={{ bg: "gray.50", borderColor: "gray.300" }}
                                    transition="all 0.2s"
                                >
                                    Load More
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Container>

            <Footer7 />
        </Box>
    );
}

