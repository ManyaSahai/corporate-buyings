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
    VStack,
    HStack,
    Heading,
    Button,
    IconButton,
} from "@chakra-ui/react";
import { FiTrash2, FiPlus, FiMinus, FiArrowLeft } from "react-icons/fi";
import { THEME_SOLID, THEME_GRADIENT, BG_COLOR, DARK_BG } from "@/lib/colors";

// Mock cart items
const initialCartItems = [
    {
        id: "1",
        title: "Camlin Pb White Board Marker Pen, Red, Pack Of 10, Bold",
        brand: "Camlin",
        quantity: 50,
        image: "/img/1.webp",
    },
];

// Quote Form Modal
function QuoteFormModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Quote request submitted successfully! We will contact you soon.");
        onClose();
    };

    const inputStyle = {
        width: "100%",
        padding: "12px 16px",
        background: "#f9fafb",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        color: "#374151",
        fontSize: "14px",
        outline: "none",
        transition: "border-color 0.2s, box-shadow 0.2s",
    };

    const labelStyle = {
        color: "#6b7280",
        fontSize: "14px",
        fontWeight: 500,
        marginBottom: "6px",
        display: "block",
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
            css={{
                backdropFilter: "blur(4px)",
            }}
        >
            <Box
                bg="white"
                rounded="2xl"
                p={8}
                maxW="600px"
                w="90%"
                position="relative"
                onClick={(e) => e.stopPropagation()}
                shadow="2xl"
                border="1px solid"
                borderColor="gray.100"
            >
                {/* Close Button */}
                <IconButton
                    aria-label="Close"
                    position="absolute"
                    top={4}
                    right={4}
                    bg="gray.100"
                    color="gray.600"
                    size="sm"
                    rounded="full"
                    _hover={{ bg: "gray.200" }}
                    onClick={onClose}
                >
                    ✕
                </IconButton>

                <Heading as="h2" fontSize="2xl" fontWeight="bold" color="gray.800" mb={2}>
                    Fill Form For Quotation
                </Heading>
                <Text color="gray.500" fontSize="sm" mb={6}>
                    Please provide your details and we&apos;ll get back to you shortly.
                </Text>

                <VStack as="form" onSubmit={handleSubmit} gap={5} align="stretch">
                    {/* Row 1: Name and Organization */}
                    <Flex gap={4} direction={{ base: "column", md: "row" }}>
                        <Box flex={1}>
                            <label style={labelStyle}>Name *</label>
                            <input
                                type="text"
                                required
                                placeholder="Your full name"
                                style={inputStyle}
                                onFocus={(e) => {
                                    e.target.style.borderColor = THEME_SOLID;
                                    e.target.style.boxShadow = `0 0 0 3px ${THEME_SOLID}20`;
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = "#e5e7eb";
                                    e.target.style.boxShadow = "none";
                                }}
                            />
                        </Box>
                        <Box flex={1}>
                            <label style={labelStyle}>Organization/Company *</label>
                            <input
                                type="text"
                                required
                                placeholder="Company name"
                                style={inputStyle}
                                onFocus={(e) => {
                                    e.target.style.borderColor = THEME_SOLID;
                                    e.target.style.boxShadow = `0 0 0 3px ${THEME_SOLID}20`;
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = "#e5e7eb";
                                    e.target.style.boxShadow = "none";
                                }}
                            />
                        </Box>
                    </Flex>

                    {/* Row 2: Email and Phone */}
                    <Flex gap={4} direction={{ base: "column", md: "row" }}>
                        <Box flex={1}>
                            <label style={labelStyle}>Company&apos;s Email *</label>
                            <input
                                type="email"
                                required
                                placeholder="email@company.com"
                                style={inputStyle}
                                onFocus={(e) => {
                                    e.target.style.borderColor = THEME_SOLID;
                                    e.target.style.boxShadow = `0 0 0 3px ${THEME_SOLID}20`;
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = "#e5e7eb";
                                    e.target.style.boxShadow = "none";
                                }}
                            />
                        </Box>
                        <Box flex={1}>
                            <label style={labelStyle}>Phone number *</label>
                            <input
                                type="tel"
                                required
                                placeholder="+91 98765 43210"
                                style={inputStyle}
                                onFocus={(e) => {
                                    e.target.style.borderColor = THEME_SOLID;
                                    e.target.style.boxShadow = `0 0 0 3px ${THEME_SOLID}20`;
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = "#e5e7eb";
                                    e.target.style.boxShadow = "none";
                                }}
                            />
                        </Box>
                    </Flex>

                    {/* Row 3: Message */}
                    <Box>
                        <label style={labelStyle}>Inquiry / Message *</label>
                        <textarea
                            required
                            rows={4}
                            placeholder="Tell us about your requirements..."
                            style={{
                                ...inputStyle,
                                resize: "vertical",
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = THEME_SOLID;
                                e.target.style.boxShadow = `0 0 0 3px ${THEME_SOLID}20`;
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = "#e5e7eb";
                                e.target.style.boxShadow = "none";
                            }}
                        />
                    </Box>

                    {/* Submit Button */}
                    <Button
                        w="full"
                        bg={THEME_SOLID}
                        color="white"
                        size="lg"
                        py={7}
                        fontSize="md"
                        fontWeight="semibold"
                        type="submit"
                        rounded="xl"
                        _hover={{ opacity: 0.9, transform: "translateY(-1px)" }}
                        transition="all 0.2s"
                        mt={2}
                    >
                        Get Quote
                    </Button>
                </VStack>
            </Box>
        </Box>
    );
}

export default function CartPage() {
    const [cartItems, setCartItems] = useState(initialCartItems);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

    const updateQuantity = (id: string, delta: number) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const setQuantity = (id: string, value: number) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, value) }
                    : item
            )
        );
    };

    const removeItem = (id: string) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <Box minH="100vh" bg={BG_COLOR} display="flex" flexDirection="column">
            <Header />

            <Container maxW="6xl" px={{ base: 4, md: 8 }} py={8} flex="1">
                {/* Header Row */}
                <Flex 
                    justify="space-between" 
                    align={{ base: "flex-start", md: "center" }} 
                    mb={{ base: 6, md: 8 }}
                    direction={{ base: "column", sm: "row" }}
                    gap={{ base: 3, sm: 0 }}
                >
                    <Heading as="h1" fontSize={{ base: "xl", md: "3xl" }} fontWeight="bold" fontStyle="italic">
                        Your Quote Cart
                    </Heading>
                    <Link href="/products" style={{ textDecoration: "none" }}>
                        <Flex align="center" color={THEME_SOLID} fontWeight="medium" fontSize={{ base: "sm", md: "md" }} _hover={{ textDecoration: "underline" }}>
                            <FiArrowLeft style={{ marginRight: "6px" }} />
                            Continue Shopping
                        </Flex>
                    </Link>
                </Flex>

                {cartItems.length === 0 ? (
                    <Box textAlign="center" py={20}>
                        <Text fontSize="xl" color="gray.600" mb={4}>
                            Your cart is empty
                        </Text>
                        <Link href="/products">
                            <Button bg={THEME_SOLID} color="white" _hover={{ opacity: 0.9 }}>
                                Browse Products
                            </Button>
                        </Link>
                    </Box>
                ) : (
                    <Box>
                        {/* Table Header - Hidden on mobile */}
                        <Box
                            bg="gray.50"
                            borderLeft="4px solid"
                            borderLeftColor={THEME_SOLID}
                            py={{ base: 3, md: 4 }}
                            px={{ base: 4, md: 6 }}
                            mb={0}
                            display={{ base: "none", md: "block" }}
                        >
                            <Flex justify="space-between" align="center">
                                <Text fontWeight="bold" fontSize="sm" textTransform="uppercase" color="gray.700">
                                    Product
                                </Text>
                                <Text fontWeight="bold" fontSize="sm" textTransform="uppercase" color="gray.700" mr={20}>
                                    Quantity
                                </Text>
                            </Flex>
                        </Box>

                        {/* Divider */}
                        <Box h="1px" bg="gray.200" />

                        {/* Cart Items */}
                        <VStack gap={0} align="stretch">
                            {cartItems.map((item) => (
                                <Box
                                    key={item.id}
                                    bg="white"
                                    py={{ base: 4, md: 6 }}
                                    px={{ base: 4, md: 6 }}
                                    borderBottom="1px solid"
                                    borderColor="gray.100"
                                >
                                    <Flex 
                                        gap={{ base: 3, md: 6 }} 
                                        align={{ base: "flex-start", md: "center" }} 
                                        justify="space-between"
                                        direction={{ base: "column", md: "row" }}
                                    >
                                        {/* Product Info */}
                                        <Flex gap={{ base: 3, md: 4 }} align="center" flex={1} w="full">
                                            <Box
                                                w={{ base: "60px", md: "80px" }}
                                                h={{ base: "60px", md: "80px" }}
                                                flexShrink={0}
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="center"
                                                bg="gray.50"
                                                rounded="lg"
                                                p={2}
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
                                                />
                                            </Box>
                                            <Box flex={1}>
                                                <Text 
                                                    fontWeight="medium" 
                                                    color="gray.800" 
                                                    mb={1}
                                                    fontSize={{ base: "sm", md: "md" }}
                                                    style={{
                                                        WebkitLineClamp: 2,
                                                        display: "-webkit-box",
                                                        WebkitBoxOrient: "vertical",
                                                        overflow: "hidden",
                                                    }}
                                                >
                                                    {item.title}
                                                </Text>
                                                <Text fontSize={{ base: "xs", md: "sm" }} color={THEME_SOLID}>
                                                    {item.brand}
                                                </Text>
                                            </Box>
                                        </Flex>

                                        {/* Quantity Controls */}
                                        <Flex gap={{ base: 2, md: 4 }} align="center" w={{ base: "full", md: "auto" }} justify={{ base: "space-between", md: "flex-end" }}>
                                            <HStack gap={0}>
                                                <IconButton
                                                    aria-label="Decrease quantity"
                                                    size={{ base: "xs", md: "sm" }}
                                                    bg={THEME_SOLID}
                                                    color="white"
                                                    rounded="none"
                                                    roundedLeft="md"
                                                    _hover={{ opacity: 0.9 }}
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                >
                                                    <FiMinus />
                                                </IconButton>
                                                <input
                                                    type="number"
                                                    value={item.quantity}
                                                    onChange={(e) => setQuantity(item.id, parseInt(e.target.value) || 1)}
                                                    style={{
                                                        width: "50px",
                                                        height: "28px",
                                                        textAlign: "center",
                                                        border: "1px solid #E2E8F0",
                                                        borderLeft: "none",
                                                        borderRight: "none",
                                                        fontSize: "14px",
                                                    }}
                                                />
                                                <IconButton
                                                    aria-label="Increase quantity"
                                                    size={{ base: "xs", md: "sm" }}
                                                    bg={THEME_SOLID}
                                                    color="white"
                                                    rounded="none"
                                                    roundedRight="md"
                                                    _hover={{ opacity: 0.9 }}
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                >
                                                    <FiPlus />
                                                </IconButton>
                                            </HStack>

                                            {/* Delete Button */}
                                            <IconButton
                                                aria-label="Remove item"
                                                size={{ base: "xs", md: "sm" }}
                                                bg={THEME_SOLID}
                                                color="white"
                                                _hover={{ opacity: 0.9 }}
                                                onClick={() => removeItem(item.id)}
                                            >
                                                <FiTrash2 />
                                            </IconButton>
                                        </Flex>
                                    </Flex>
                                </Box>
                            ))}
                        </VStack>

                        {/* Spacer for footer */}
                        <Box h="120px" />
                    </Box>
                )}
            </Container>

            {/* Sticky Footer */}
            {cartItems.length > 0 && (
                <Box
                    position="fixed"
                    bottom={0}
                    left={0}
                    right={0}
                    bg="white"
                    borderTop="1px solid"
                    borderColor="gray.200"
                    py={{ base: 3, md: 4 }}
                    px={{ base: 4, md: 8 }}
                    zIndex={100}
                >
                    <Container maxW="6xl" px={{ base: 0, md: 4 }}>
                        <Flex justify="space-between" align="center">
                            <Text color="gray.500" fontSize={{ base: "sm", md: "md" }}>
                                {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in cart
                            </Text>
                            <Button
                                bg={THEME_SOLID}
                                color="white"
                                size={{ base: "sm", md: "md" }}
                                px={{ base: 4, md: 8 }}
                                _hover={{ opacity: 0.9 }}
                                onClick={() => setIsQuoteModalOpen(true)}
                            >
                                Request Quote
                            </Button>
                        </Flex>
                    </Container>
                </Box>
            )}

            {/* Quote Form Modal */}
            <QuoteFormModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
            />

            <Footer7 />
        </Box>
    );
}
