"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import {
  Box,
  Flex,
  Text,
  Button,
  Badge,
  IconButton,
  Container,
  Grid,
  Table,
  VStack,
  HStack,
  Tabs,
} from "@chakra-ui/react";
import { FiShare2 } from "react-icons/fi";
import { FaWhatsapp, FaFileAlt } from "react-icons/fa";
import { THEME_SOLID, BG_COLOR } from "@/lib/colors";
import { Footer7 } from "@/components/ui/footer-7";

const productDetails: Record<
  string,
  {
    title: string;
    price: string;
    image: string;
    brand: string;
    category: string;
    description: string;
    specifications: { key: string; value: string }[];
  }
> = {
  "1": {
    title: "Camlin Marker Pen Easily Erasable - Red (Pack of 10)",
    price: "₹--",
    image: "/img/1.webp",
    brand: "Camlin",
    category: "Marker Pens",
    description:
      "The product is ideal for students and professionals alike. It comes with variable specification and enhances On-trend writing style. It will meet your requirements perfectly.",
    specifications: [
      { key: "Pack Size", value: "10 Pens" },
      { key: "Color", value: "Red" },
      { key: "Type", value: "Erasable Marker" },
      { key: "Brand", value: "Camlin" },
    ],
  },
  "2": {
    title: "Camlin Marker Ink-Black-Pack of 3 45 ml Marker Refill (Black)",
    price: "₹--",
    image: "/img/2.webp",
    brand: "Camlin",
    category: "Marker Pens",
    description:
      "High-quality marker refill ink for professional use. This 45ml black marker ink refill comes in a pack of 3 and is perfect for artists and professionals who need consistent color quality.",
    specifications: [
      { key: "Quantity", value: "Pack of 3" },
      { key: "Size", value: "45 ml Each" },
      { key: "Color", value: "Black" },
      { key: "Type", value: "Marker Refill Ink" },
    ],
  },
  "3": {
    title: "Camlin Marker Ink-Black-Pack of 2 30 ml Marker Refill (Black)",
    price: "₹--",
    image: "/img/3.webp",
    brand: "Camlin",
    category: "Marker Pens",
    description:
      "Economical black marker refill ink from Camlin. This 30ml ink refill comes in a pack of 2 and provides excellent coverage for all your marker needs.",
    specifications: [
      { key: "Quantity", value: "Pack of 2" },
      { key: "Size", value: "30 ml Each" },
      { key: "Color", value: "Black" },
      { key: "Type", value: "Marker Refill Ink" },
    ],
  },
  "4": {
    title: "Camlin Ltd okuyo - Brush Pens - 24 Shades (Multicolor) - Set of 2",
    price: "₹--",
    image: "/img/4.webp",
    brand: "Camlin",
    category: "Marker Pens",
    description:
      "Premium brush pen set with 24 vibrant shades perfect for artists and designers. These high-quality brush pens deliver smooth, consistent color for detailed artwork and calligraphy.",
    specifications: [
      { key: "Number of Sets", value: "2" },
      { key: "Shades Per Set", value: "24 Colors" },
      { key: "Type", value: "Brush Pens" },
      { key: "Material", value: "Premium Quality" },
    ],
  },
  "5": {
    title: "Camlin Kokuyo White Board Marker Pen (Black) - Pack of 10 Pieces",
    price: "₹--",
    image: "/img/5.webp",
    brand: "Camlin",
    category: "Marker Pens",
    description:
      "Reliable whiteboard marker pen for office and classroom use. These black markers write smoothly on whiteboards and erase cleanly without leaving stains or ghosting.",
    specifications: [
      { key: "Pack Size", value: "10 Pens" },
      { key: "Color", value: "Black" },
      { key: "Type", value: "Whiteboard Marker" },
      { key: "Tip Type", value: "Bullet Point" },
    ],
  },
  "6": {
    title:
      "Camlin Kokuyo Pb White Board Marker - Pack Of 4 Assorted Colors (Black, Blue, Red, Green) Sketch Pens With Free Stencil - 24 Shades (Multicolor)",
    price: "₹--",
    image: "/img/6.webp",
    brand: "Camlin",
    category: "Marker Pens",
    description:
      "Versatile assorted whiteboard markers with free stencil included. This pack of 4 includes black, blue, red, and green markers perfect for various applications and creative work.",
    specifications: [
      { key: "Pack Size", value: "4 Pens + Free Stencil" },
      { key: "Colors", value: "Black, Blue, Red, Green" },
      { key: "Type", value: "Whiteboard Marker" },
      { key: "Bonus", value: "Free Stencil Included" },
    ],
  },
};

// Using THEME_SOLID from @/lib/colors

// Related products component
function RelatedProductCard({ product, productId }: { product: typeof productDetails["1"]; productId: string }) {
  return (
    <Link href={`/products/${productId}`} style={{ textDecoration: "none" }}>
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
        <Box p={{ base: 2, md: 4 }} display="flex" justifyContent="center" bg="white" h={{ base: "100px", md: "150px" }} alignItems="center">
          <img
            src={product.image}
            alt={product.title}
            style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
          />
        </Box>
        <Box p={{ base: 2, md: 4 }}>
          <Text
            fontWeight="medium"
            fontSize={{ base: "xs", md: "sm" }}
            mb={{ base: 1, md: 2 }}
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
  );
}

// Share Modal Component
function ShareModal({ isOpen, onClose, productTitle, productUrl }: { isOpen: boolean; onClose: () => void; productTitle: string; productUrl: string }) {
  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(productUrl);
    alert("Link copied to clipboard!");
  };

  const handleWhatsAppShare = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(`Check out this product: ${productTitle} - ${productUrl}`)}`, "_blank");
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
        p={6}
        maxW="400px"
        w="90%"
        onClick={(e) => e.stopPropagation()}
      >
        <Text fontWeight="bold" fontSize="lg" mb={4}>Share this product</Text>
        <VStack gap={3}>
          <Button
            w="full"
            colorScheme="whatsapp"
            onClick={handleWhatsAppShare}
          >
            <FaWhatsapp style={{ marginRight: "8px" }} />
            Share on WhatsApp
          </Button>
          <Button
            w="full"
            variant="outline"
            onClick={handleCopyLink}
          >
            Copy Link
          </Button>
          <Button
            w="full"
            variant="ghost"
            onClick={onClose}
          >
            Cancel
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const product = productDetails[id];
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Get related products (exclude current product)
  const relatedProducts = Object.entries(productDetails)
    .filter(([key]) => key !== id)
    .slice(0, 4);

  if (!product) {
    return (
      <Box minH="100vh" bg="gray.50">
        <Header />
        <Container maxW="8xl" py={20}>
          <Text fontSize="xl" color="gray.600">
            Product not found
          </Text>
        </Container>
      </Box>
    );
  }

  const productUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <Box minH="100vh" bg={BG_COLOR}>
      <Header />

      <Container maxW="8xl" px={{ base: 4, md: 8 }} py={{ base: 6, md: 12 }}>
        {/* Breadcrumb */}
        <Flex 
          gap={2} 
          mb={{ base: 4, md: 8 }} 
          fontSize={{ base: "xs", md: "sm" }} 
          color="gray.600"
          flexWrap="wrap"
          display={{ base: "none", sm: "flex" }}
        >
          <Link href="/products" style={{ color: "#3182CE" }}>Products</Link>
          <Text>/</Text>
          <Link href={`/products?category=${encodeURIComponent(product.category)}`} style={{ color: "#3182CE" }}>{product.category}</Link>
          <Text>/</Text>
          <Text 
            fontWeight="medium" 
            color="gray.900"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "200px"
            }}
          >
            {product.title}
          </Text>
        </Flex>

        {/* Product Detail Section */}
        <Flex
          gap={8}
          align="start"
          flexDirection={{ base: "column", md: "row" }}
        >
          {/* Left Side - Image */}
          <Box
            flex={1}
            bg="white"
            rounded="2xl"
            shadow="sm"
            p={{ base: 4, md: 8 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            alignSelf="stretch"
            minH={{ base: "200px", md: "300px" }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Right Side - Details */}
          <Box flex={1} display="flex" flexDirection="column" gap={{ base: 4, md: 6 }}>
            {/* Title and Actions */}
            <Box>
              <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="gray.900" mb={3}>
                {product.title}
              </Text>

              {/* Action Buttons */}
              <Flex gap={3} flexWrap="wrap" mb={{ base: 4, md: 6 }}>
                <Button
                  flex={1}
                  minW={{ base: "200px", md: "auto" }}
                  bg={THEME_SOLID}
                  color="white"
                  size={{ base: "md", md: "lg" }}
                  _hover={{ opacity: 0.9 }}
                >
                  <FaFileAlt style={{ marginRight: "8px" }} />
                  Request For Quote
                </Button>
                <IconButton
                  as="button"
                  _icon={{ w: 5, h: 5 }}
                  variant="outline"
                  colorScheme="blue"
                  aria-label="Share"
                  size={{ base: "md", md: "lg" }}
                  w="50px"
                  onClick={() => setIsShareModalOpen(true)}
                >
                  <FiShare2 />
                </IconButton>
              </Flex>

              {/* Badges */}
              <Flex gap={{ base: 2, md: 3 }} mb={{ base: 4, md: 6 }} flexWrap="wrap">
                <Link href={`/products?brand=${encodeURIComponent(product.brand)}`}>
                  <Badge
                    bg="blue.50"
                    color="blue.500"
                    px={{ base: 2, md: 3 }}
                    py={{ base: 1, md: 2 }}
                    borderRadius="2xl"
                    textTransform="none"
                    fontWeight="medium"
                    cursor="pointer"
                    fontSize={{ base: "xs", md: "sm" }}
                    _hover={{ bg: "blue.100" }}
                  >
                    {product.brand}
                  </Badge>
                </Link>
                <Link href={`/products?category=${encodeURIComponent(product.category)}`}>
                  <Badge
                    bg="pink.50"
                    color="pink.500"
                    px={{ base: 2, md: 3 }}
                    py={{ base: 1, md: 2 }}
                    borderRadius="2xl"
                    textTransform="none"
                    fontWeight="medium"
                    cursor="pointer"
                    fontSize={{ base: "xs", md: "sm" }}
                    _hover={{ bg: "pink.100" }}
                  >
                    {product.category}
                  </Badge>
                </Link>
              </Flex>
            </Box>

            {/* Tabs for Description and Specifications */}
            <Box bg="white" rounded="2xl" shadow="sm" overflow="hidden">
              <Tabs.Root defaultValue="description" variant="line" colorPalette="blue">
                <Tabs.List 
                  px={{ base: 3, md: 6 }} 
                  pt={{ base: 3, md: 4 }} 
                  borderBottom="1px solid" 
                  borderColor="gray.100"
                  overflowX="auto"
                >
                  <Tabs.Trigger
                    value="description"
                    fontWeight="semibold"
                    px={{ base: 2, md: 4 }}
                    pb={3}
                    fontSize={{ base: "sm", md: "md" }}
                    _selected={{ color: THEME_SOLID, borderColor: THEME_SOLID }}
                    color="gray.500"
                    whiteSpace="nowrap"
                  >
                    Product Description
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="specifications"
                    fontWeight="semibold"
                    px={{ base: 2, md: 4 }}
                    pb={3}
                    fontSize={{ base: "sm", md: "md" }}
                    _selected={{ color: THEME_SOLID, borderColor: THEME_SOLID }}
                    color="gray.500"
                    whiteSpace="nowrap"
                  >
                    Specifications
                  </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="description" p={{ base: 4, md: 6 }}>
                  <Text color="gray.600" lineHeight="1.8" fontSize={{ base: "sm", md: "md" }}>
                    {product.description}
                  </Text>
                </Tabs.Content>
                <Tabs.Content value="specifications" p={{ base: 4, md: 6 }}>
                  <Table.Root size="sm">
                    <Table.Body>
                      {product.specifications.map((spec, index) => (
                        <Table.Row key={index}>
                          <Table.Cell 
                            fontWeight="medium" 
                            color="gray.700" 
                            py={2} 
                            borderBottom="1px solid" 
                            borderColor="gray.100"
                            fontSize={{ base: "xs", md: "sm" }}
                            w={{ base: "40%", md: "auto" }}
                          >
                            {spec.key}
                          </Table.Cell>
                          <Table.Cell 
                            color="gray.600" 
                            py={2} 
                            borderBottom="1px solid" 
                            borderColor="gray.100"
                            fontSize={{ base: "xs", md: "sm" }}
                          >
                            {spec.value}
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table.Root>
                </Tabs.Content>
              </Tabs.Root>
            </Box>
          </Box>
        </Flex>

        {/* Related Products Section */}
        <Box mt={{ base: 10, md: 16 }}>
          <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="gray.900" mb={{ base: 4, md: 6 }}>
            Related Products
          </Text>
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            }}
            gap={6}
          >
            {relatedProducts.map(([productId, relatedProduct]) => (
              <RelatedProductCard
                key={productId}
                productId={productId}
                product={relatedProduct}
              />
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        productTitle={product.title}
        productUrl={productUrl}
      />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918655598711"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          zIndex: 999,
        }}
      >
        <IconButton
          _icon={{ w: 7, h: 7 }}
          colorScheme="whatsapp"
          rounded="full"
          size="lg"
          w="60px"
          h="60px"
          shadow="xl"
          aria-label="Contact on WhatsApp"
          _hover={{ transform: "scale(1.1)" }}
          transition="all 0.2s"
        >
          <FaWhatsapp size={28} />
        </IconButton>
      </a>
      <Footer7 />
    </Box>
  );
}
