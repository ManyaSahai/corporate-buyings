"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
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
  FiX,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { THEME_SOLID, BG_COLOR, THEME_PRIMARY } from "@/lib/colors";
import { Footer7 } from "@/components/ui/footer-7";

// --- Configuration ---
const THEME_COLOR = "rgba(42, 52, 140, 0.6)"; // Derived from THEME_PRIMARY

// --- Mock Data ---
const allProducts = [
  {
    id: 1,
    title: "Camlin Marker Pen Easily Erasable - Red (Pack of 10)",
    price: "₹--",
    image: "/img/1.webp",
    brand: "Camlin",
    category: "Marker Pens",
  },
  {
    id: 2,
    title: "Camlin Marker Ink-Black-Pack of 3 45 ml Marker Refill (Black)",
    price: "₹--",
    image: "/img/2.webp",
    brand: "Camlin",
    category: "Marker Pens",
  },
  {
    id: 3,
    title: "Camlin Marker Ink-Black-Pack of 2 30 ml Marker Refill (Black)",
    price: "₹--",
    image: "/img/3.webp",
    brand: "Camlin",
    category: "Marker Pens",
  },
  {
    id: 4,
    title: "Camlin Ltd okuyo - Brush Pens - 24 Shades (Multicolor) - Set of 2",
    price: "₹--",
    image: "/img/4.webp",
    brand: "Camlin",
    category: "Brush Pens",
  },
  {
    id: 5,
    title: "Camlin Kokuyo White Board Marker Pen (Black) - Pack of 10 Pieces",
    price: "₹--",
    image: "/img/5.webp",
    brand: "Camlin",
    category: "Whiteboard Markers",
  },
  {
    id: 6,
    title:
      "Camlin Kokuyo Pb White Board Marker - Pack Of 4 Assorted Colors (Black, Blue, Red, Green) Sketch Pens With Free Stencil - 24 Shades (Multicolor)",
    price: "₹--",
    image: "/img/6.webp",
    brand: "Camlin",
    category: "Whiteboard Markers",
  },
  {
    id: 7,
    title: "3M Post-it Notes Super Sticky - 100 Sheets",
    price: "₹199",
    image: "/img/1.webp",
    brand: "3M",
    category: "Sticky Notes",
  },
  {
    id: 8,
    title: "Philips LED Bulb 9W Cool Day Light - Pack of 4",
    price: "₹599",
    image: "/img/2.webp",
    brand: "Philips",
    category: "LED Lights",
  },
  {
    id: 9,
    title: "Havells Ceiling Fan 1200mm High Speed",
    price: "₹2,299",
    image: "/img/3.webp",
    brand: "Havells",
    category: "Ceiling Fans",
  },
  {
    id: 10,
    title: "Cello Trimate Ball Pen - Blue (Pack of 25)",
    price: "₹149",
    image: "/img/4.webp",
    brand: "Cello",
    category: "Ball Pens",
  },
  {
    id: 11,
    title: "Apsara Gold Pencils - Pack of 10",
    price: "₹89",
    image: "/img/5.webp",
    brand: "Apsara",
    category: "Pencils",
  },
  {
    id: 12,
    title: "Nataraj Geometry Box - Premium Set",
    price: "₹199",
    image: "/img/6.webp",
    brand: "Nataraj",
    category: "Geometry Sets",
  },
];

// Extract unique brands and categories
const uniqueBrands = [...new Set(allProducts.map((p) => p.brand))].sort();
const uniqueCategories = [...new Set(allProducts.map((p) => p.category))].sort();

// 1. Sidebar Component
interface SidebarContentProps {
  selectedBrands: string[];
  selectedCategories: string[];
  onBrandChange: (brand: string) => void;
  onCategoryChange: (category: string) => void;
  onReset: () => void;
  brandSearch: string;
  categorySearch: string;
  onBrandSearchChange: (val: string) => void;
  onCategorySearchChange: (val: string) => void;
}

const SidebarContent = ({
  selectedBrands,
  selectedCategories,
  onBrandChange,
  onCategoryChange,
  onReset,
  brandSearch,
  categorySearch,
  onBrandSearchChange,
  onCategorySearchChange,
}: SidebarContentProps) => {
  const filteredBrands = uniqueBrands.filter((b) =>
    b.toLowerCase().includes(brandSearch.toLowerCase())
  );
  const filteredCategories = uniqueCategories.filter((c) =>
    c.toLowerCase().includes(categorySearch.toLowerCase())
  );

  const brandCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    uniqueBrands.forEach((brand) => {
      counts[brand] = allProducts.filter((p) => p.brand === brand).length;
    });
    return counts;
  }, []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    uniqueCategories.forEach((cat) => {
      counts[cat] = allProducts.filter((p) => p.category === cat).length;
    });
    return counts;
  }, []);

  return (
    <VStack gap={6} align="start" w="full">
      {/* Categories Section */}
      <Box bg="white" p={5} rounded="2xl" shadow="sm" w="full">
        <Flex justify="space-between" align="center" mb={4}>
          <Text fontWeight="bold" fontSize="lg">
            Categories
          </Text>
          <Text fontSize="xs" color="gray.500">
            {selectedCategories.length} selected
          </Text>
        </Flex>

        <InputGroup mb={3}>
          <Input
            placeholder="Search categories..."
            borderRadius="2xl"
            value={categorySearch}
            onChange={(e) => onCategorySearchChange(e.target.value)}
          />
        </InputGroup>

        <VStack gap={2} align="start" maxH="250px" overflowY="auto" pr={2}>
          {filteredCategories.map((cat, i) => (
            <HStack key={i} gap={2} cursor="pointer" onClick={() => onCategoryChange(cat)}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => onCategoryChange(cat)}
              />
              <Text fontSize="sm" color="gray.700">
                {cat} ({categoryCounts[cat]})
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
            {selectedBrands.length} selected
          </Text>
        </Flex>

        <InputGroup mb={3}>
          <Input
            placeholder="Search brands..."
            borderRadius="2xl"
            value={brandSearch}
            onChange={(e) => onBrandSearchChange(e.target.value)}
          />
        </InputGroup>

        <VStack gap={2} align="start" maxH="250px" overflowY="auto" pr={2}>
          {filteredBrands.map((brand, i) => (
            <HStack key={i} gap={2} cursor="pointer" onClick={() => onBrandChange(brand)}>
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => onBrandChange(brand)}
              />
              <Text fontSize="sm" color="gray.700">
                {brand} ({brandCounts[brand]})
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
        onClick={onReset}
      >
        Reset All Filters
      </Button>
    </VStack>
  );
};

// 2. Product Card Component
const ProductCard = ({
  product,
}: {
  product: (typeof allProducts)[0];
}) => (
  <Link href={`/products/${product.id}`} style={{ textDecoration: "none" }}>
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
            <Link href={`/products?brand=${encodeURIComponent(product.brand)}`} onClick={(e) => e.stopPropagation()}>
              <Badge
                bg="blue.50"
                color="blue.500"
                px={2}
                py={1}
                borderRadius="2xl"
                textTransform="none"
                fontWeight="medium"
                cursor="pointer"
                _hover={{ bg: "blue.100" }}
              >
                {product.brand}
              </Badge>
            </Link>
            <Link href={`/products?category=${encodeURIComponent(product.category)}`} onClick={(e) => e.stopPropagation()}>
              <Badge
                bg="pink.50"
                color="pink.500"
                px={2}
                py={1}
                borderRadius="2xl"
                textTransform="none"
                fontWeight="medium"
                cursor="pointer"
                _hover={{ bg: "pink.100" }}
              >
                {product.category}
              </Badge>
            </Link>
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

// Active Filter Chip Component
const FilterChip = ({ label, onRemove }: { label: string; onRemove: () => void }) => (
  <Badge
    bg="blue.500"
    color="white"
    px={3}
    py={1}
    borderRadius="2xl"
    display="flex"
    alignItems="center"
    gap={2}
  >
    {label}
    <Box as="button" onClick={onRemove} cursor="pointer" _hover={{ opacity: 0.7 }}>
      <FiX size={14} />
    </Box>
  </Badge>
);

export default function ProductsPageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [brandSearch, setBrandSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Get filters from URL params
  const urlBrand = searchParams.get("brand");
  const urlCategory = searchParams.get("category");

  const selectedBrands = urlBrand ? [urlBrand] : [];
  const selectedCategories = urlCategory ? [urlCategory] : [];

  // Filter products based on selected filters and search
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesSearch = searchQuery === "" || 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesBrand && matchesCategory && matchesSearch;
    });
  }, [selectedBrands, selectedCategories, searchQuery]);

  const handleBrandChange = (brand: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedBrands.includes(brand)) {
      params.delete("brand");
    } else {
      params.set("brand", brand);
    }
    router.push(`/products?${params.toString()}`);
  };

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedCategories.includes(category)) {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    router.push(`/products?${params.toString()}`);
  };

  const handleReset = () => {
    router.push("/products");
    setSearchQuery("");
  };

  const removeFilter = (type: "brand" | "category", value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(type);
    router.push(`/products?${params.toString()}`);
  };

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

        {/* Active Filters Display */}
        {(selectedBrands.length > 0 || selectedCategories.length > 0) && (
          <Flex gap={2} mb={4} wrap="wrap" align="center">
            <Text fontSize="sm" color="gray.600" mr={2}>Active Filters:</Text>
            {selectedBrands.map((brand) => (
              <FilterChip key={brand} label={brand} onRemove={() => removeFilter("brand", brand)} />
            ))}
            {selectedCategories.map((cat) => (
              <FilterChip key={cat} label={cat} onRemove={() => removeFilter("category", cat)} />
            ))}
            <Button size="xs" variant="ghost" colorScheme="red" onClick={handleReset}>
              Clear All
            </Button>
          </Flex>
        )}

        <Flex gap={8} align="start">
          {/* 2. Sidebar (Desktop) */}
          <Box
            w="280px"
            display={{ base: "none", lg: "block" }}
            position="sticky"
            top="20px"
          >
            <SidebarContent
              selectedBrands={selectedBrands}
              selectedCategories={selectedCategories}
              onBrandChange={handleBrandChange}
              onCategoryChange={handleCategoryChange}
              onReset={handleReset}
              brandSearch={brandSearch}
              categorySearch={categorySearch}
              onBrandSearchChange={setBrandSearch}
              onCategorySearchChange={setCategorySearch}
            />
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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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

              <Flex align="center" gap={4}>
                <Text fontSize="sm" color="gray.600">
                  {filteredProducts.length} products found
                </Text>
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
            </Flex>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <Grid
                templateColumns={{
                  base: "1fr",
                  sm: "repeat(2, 1fr)",
                  xl: "repeat(3, 1fr)",
                }}
                gap={6}
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </Grid>
            ) : (
              <Box bg="white" p={12} rounded="2xl" textAlign="center">
                <Text fontSize="lg" color="gray.500" mb={4}>
                  No products found matching your filters.
                </Text>
                <Button colorScheme="blue" onClick={handleReset}>
                  Reset Filters
                </Button>
              </Box>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
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
            )}
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
