"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import {
  Box,
  Flex,
  Text,
  Input,
  InputGroup,
  Button,
  Badge,
  IconButton,
  Container,
  Grid,
  VStack,
  HStack,
} from "@chakra-ui/react";
import {
  FiSearch,
  FiFilter,
  FiPhone,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { THEME_SOLID, BG_COLOR, THEME_PRIMARY } from "@/lib/colors";
import { Footer7 } from "@/components/ui/footer-7";

// --- Configuration ---
const THEME_COLOR = "rgba(42, 52, 140, 0.6)"; // Derived from THEME_PRIMARY

// --- Mock Data ---
const categories = [
  "Soap Dispenser (5)",
  "Account Books (3)",
  "Air Freshener (67)",
  "Aluminum Foils (1)",
  "Ball Pens (326)",
  "Binder Clip (6)",
  "Biscuits (1)",
  "Braided Cables (21)",
];

const brands = [
  "3M (4)",
  "Add Gel (10)",
  "Camlin (53)",
  "Casio (2)",
  "Cello (15)",
  "Classmate (20)",
  "Doms (12)",
  "Faber-Castell (8)",
];

const products = [
  {
    title: "Camlin Marker Pen Easily Erasable - Red (Pack of 10)",
    price: "₹--",
    image: "/img/1.webp",
    brand: "Camlin",
    category: "Marker Pens",
  },
  {
    title: "Camlin Marker Ink-Black-Pack of 3 45 ml Marker Refill (Black)",
    price: "₹--",
    image: "/img/2.webp",
    brand: "Camlin",
    category: "Marker Pens",
  },
  {
    title: "Camlin Marker Ink-Black-Pack of 2 30 ml Marker Refill (Black)",
    price: "₹--",
    image: "/img/3.webp",
    brand: "Camlin",
    category: "Marker Pens",
  },
  {
    title: "Camlin Ltd okuyo - Brush Pens - 24 Shades (Multicolor) - Set of 2",
    price: "₹--",
    image: "/img/4.webp",
    brand: "Camlin",
    category: "Marker Pens",
  },
  {
    title: "Camlin Kokuyo White Board Marker Pen (Black) - Pack of 10 Pieces",
    price: "₹--",
    image: "/img/5.webp",
    brand: "Camlin",
    category: "Marker Pens",
  },
  {
    title:
      "Camlin Kokuyo Pb White Board Marker - Pack Of 4 Assorted Colors (Black, Blue, Red, Green) Sketch Pens With Free Stencil - 24 Shades (Multicolor)",
    price: "₹--",
    image: "/img/6.webp",
    brand: "Camlin",
    category: "Marker Pens",
  },
];

// 1. Sidebar Component
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

// 2. Product Card Component
const ProductCard = ({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) => (
  <Link href={`/products/${index + 1}`} style={{ textDecoration: "none" }}>
    <Box
      bg="white"
      rounded="2xl"
      shadow="sm"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-5px)",
        shadow: "lg",
        cursor: "pointer",
      }}
      position="relative"
      border="1px solid"
      borderColor="gray.100"
      display="flex"
      flexDirection="column"
      h="100%"
    >
      <Box
        p={6}
        display="flex"
        justifyContent="center"
        bg="white"
        h="250px"
        alignItems="center"
        position="relative"
        w="full"
      >
        <img
          src={product.image}
          alt={product.title}
          style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
        />
      </Box>

      <Box p={5} flex="1" display="flex" flexDirection="column">
        <Text
          fontWeight="bold"
          fontSize="md"
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

        {/* Pills/Tags & Actions */}
        <Flex mb={4} mt="auto" justify="space-between" align="center">
          <Flex gap={2} wrap="wrap">
            <Badge
              bg="blue.50"
              color="blue.500"
              px={2}
              py={1}
              borderRadius="2xl"
              textTransform="none"
              fontWeight="medium"
            >
              {product.brand}
            </Badge>
            <Badge
              bg="pink.50"
              color="pink.500"
              px={2}
              py={1}
              borderRadius="2xl"
              textTransform="none"
              fontWeight="medium"
            >
              {product.category}
            </Badge>
          </Flex>

          <IconButton
            as="button"
            _icon={{ w: 5, h: 5 }}
            variant="ghost"
            colorScheme="blue"
            aria-label="Call"
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <FiPhone />
          </IconButton>
        </Flex>
      </Box>
    </Box>
  </Link>
);

export default function ProductsPage() {
  const [open, setOpen] = useState(false);

  return (
    <Box minH="100vh" bg={BG_COLOR}>
      <Header />

      {/* 1. Hero Section */}
      <Box
        h={{ base: "200px", md: "300px" }}
        position="relative"
        overflow="hidden"
        mb={8}
        backgroundImage="url('https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=1974&auto=format&fit=crop')"
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      >
        <Text
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          color="white"
          textShadow="0 2px 4px rgba(0,0,0,0.4)"
          position="relative"
          zIndex={2}
        >
          Our Products
        </Text>
        <Text color="white" fontSize="lg" mt={2} position="relative" zIndex={2}>
          Discover our wide range of high-quality products
        </Text>
      </Box>

      <Container maxW="8xl" px={{ base: 4, md: 8 }} pb={20}>
        {/* Mobile Filter Toggle */}
        <Button
          display={{ base: "flex", lg: "none" }}
          onClick={() => setOpen(!open)}
          bg={THEME_COLOR}
          color="white"
          mb={4}
          _hover={{ bg: THEME_SOLID }}
        >
          <FiFilter style={{ marginRight: "8px" }} />
          Show Filters
        </Button>

        <Flex gap={8} align="start">
          {/* 2. Sidebar (Desktop) */}
          <Box
            w="280px"
            display={{ base: "none", lg: "block" }}
            position="sticky"
            top="20px"
          >
            <SidebarContent />
          </Box>

          {/* 3. Main Product Grid */}
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

            {/* Products Grid */}
            <Grid
              templateColumns={{
                base: "1fr",
                sm: "repeat(2, 1fr)",
                xl: "repeat(3, 1fr)",
              }}
              gap={6}
            >
              {products.map((product, index) => (
                <ProductCard key={index} product={product} index={index} />
              ))}
            </Grid>

            {/* Pagination */}
            <Flex justify="center" mt={12} gap={2}>
              <Button variant="outline" size="sm">
                <FiChevronLeft style={{ marginRight: "4px" }} />
                Prev
              </Button>
              <Button bg={THEME_SOLID} color="white" size="sm">
                1
              </Button>
              <Button variant="ghost" size="sm">
                2
              </Button>
              <Button variant="ghost" size="sm">
                3
              </Button>
              <Button variant="ghost" size="sm">
                ...
              </Button>
              <Button variant="ghost" size="sm">
                233
              </Button>
              <Button bg={THEME_SOLID} color="white" size="sm">
                Next
                <FiChevronRight style={{ marginLeft: "4px" }} />
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Container>

      {/* Floating WhatsApp Button */}
      <IconButton
        as="button"
        _icon={{ w: 7, h: 7 }}
        position="fixed"
        bottom="30px"
        right="30px"
        colorScheme="whatsapp"
        rounded="full"
        size="lg"
        w="60px"
        h="60px"
        shadow="xl"
        aria-label="Contact on WhatsApp"
        zIndex={999}
        _hover={{ transform: "scale(1.1)" }}
        transition="all 0.2s"
      >
        <FaWhatsapp size={28} />
      </IconButton>
      <Footer7 />
    </Box>
  );
}
