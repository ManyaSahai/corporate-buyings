"use client";

import React from "react";
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
    Icon,
    Input,
    Button,
    Textarea,
} from "@chakra-ui/react";
import { FiPhone, FiMail, FiMapPin, FiClock, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { THEME_SOLID, THEME_GRADIENT, BG_COLOR, DARK_BG } from "@/lib/colors";

const contactInfo = [
    {
        icon: FiPhone,
        title: "Phone",
        details: ["+91 86555 98711", "+91 86555 98711"],
        color: "blue",
    },
    {
        icon: FiMail,
        title: "Email",
        details: ["info@corporatebuyings.com", "support@corporatebuyings.com"],
        color: "purple",
    },
    {
        icon: FiMapPin,
        title: "Address",
        details: ["123 Business Park, Sector 5", "Mumbai, Maharashtra 400001"],
        color: "orange",
    },
    {
        icon: FiClock,
        title: "Business Hours",
        details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
        color: "green",
    },
];

const colorMap: Record<string, { bg: string; icon: string }> = {
    blue: { bg: "#EBF8FF", icon: "#3182CE" },
    purple: { bg: "#FAF5FF", icon: "#805AD5" },
    orange: { bg: "#FFFAF0", icon: "#DD6B20" },
    green: { bg: "#F0FFF4", icon: "#38A169" },
};

export default function ContactPage() {
    return (
        <Box minH="100vh" bg={BG_COLOR}>
            <Header />

            {/* Hero Section */}
            <Box position="relative" overflow="hidden" h={{ base: "180px", md: "160px" }}>
                {/* Background Image - Full Width */}
                <Box
                    position="absolute"
                    top={0}
                    left="66%"
                    right={0}
                    bottom={0}
                    display={{ base: "none", md: "block" }}
                >
                    <img
                        src="/support.webp"
                        alt="Support team"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center 20%",
                        }}
                    />
                </Box>

                {/* Left Content - Dark Blue with curved right edge */}
                <Box
                    bg={DARK_BG}
                    w={{ base: "100%", md: "66%" }}
                    h="full"
                    py={6}
                    px={{ base: 6, md: 10 }}
                    position="relative"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    zIndex={2}
                    _after={{
                        content: '""',
                        position: "absolute",
                        top: 0,
                        right: "-30px",
                        bottom: 0,
                        width: "60px",
                        bg: DARK_BG,
                        borderRadius: "0 50% 50% 0",
                        display: { base: "none", md: "block" },
                    }}
                >
                    <Heading
                        as="h1"
                        fontSize={{ base: "xl", md: "2xl" }}
                        fontWeight="700"
                        color="white"
                        mb={2}
                    >
                        Get in touch
                    </Heading>
                    <Text
                        fontSize={{ base: "xs", md: "sm" }}
                        color="gray.400"
                        maxW="320px"
                        lineHeight="1.6"
                    >
                        Want to get in touch? We&apos;d love to hear from you. Here&apos;s how you can reach us.
                    </Text>
                </Box>
            </Box>

            <Container maxW="6xl" px={{ base: 4, md: 8 }} py={{ base: 12, md: 16 }}>
                <Grid
                    templateColumns={{
                        base: "1fr",
                        lg: "1fr 1.2fr",
                    }}
                    gap={{ base: 10, lg: 16 }}
                    alignItems="start"
                >
                    {/* Contact Information */}
                    <VStack gap={6} align="stretch">
                        <Box>
                            <Heading as="h2" fontSize="xl" fontWeight="600" color="gray.900" mb={2}>
                                Contact Information
                            </Heading>
                            <Text fontSize="sm" color="gray.500">
                                Reach out to us through any of these channels
                            </Text>
                        </Box>

                        <VStack gap={4} align="stretch">
                            {contactInfo.map((item, index) => (
                                <Flex
                                    key={index}
                                    gap={4}
                                    p={5}
                                    bg="white"
                                    borderRadius="xl"
                                    border="1px solid"
                                    borderColor="gray.100"
                                    align="center"
                                    transition="all 0.2s"
                                    _hover={{
                                        borderColor: "gray.200",
                                        transform: "translateY(-2px)",
                                        shadow: "md"
                                    }}
                                >
                                    <Flex
                                        w="48px"
                                        h="48px"
                                        bg={colorMap[item.color].bg}
                                        borderRadius="xl"
                                        align="center"
                                        justify="center"
                                        flexShrink={0}
                                    >
                                        <Icon as={item.icon} boxSize={5} color={colorMap[item.color].icon} />
                                    </Flex>
                                    <Box flex={1}>
                                        <Text fontWeight="600" fontSize="sm" color="gray.900" mb={1}>
                                            {item.title}
                                        </Text>
                                        {item.details.map((detail, idx) => (
                                            <Text key={idx} fontSize="sm" color="gray.500" lineHeight="1.5">
                                                {detail}
                                            </Text>
                                        ))}
                                    </Box>
                                </Flex>
                            ))}
                        </VStack>
                    </VStack>

                    {/* Contact Form */}
                    <Box
                        bg="white"
                        p={{ base: 6, md: 10 }}
                        borderRadius="2xl"
                        border="1px solid"
                        borderColor="gray.100"
                        shadow="xl"
                    >
                        <Heading as="h2" fontSize="xl" fontWeight="600" color="gray.900" mb={2}>
                            Send us a Message
                        </Heading>
                        <Text fontSize="sm" color="gray.500" mb={8}>
                            Fill out the form and we&apos;ll get back to you within 24 hours
                        </Text>

                        <VStack as="form" gap={5} align="stretch">
                            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={5}>
                                <Box>
                                    <Text fontSize="sm" fontWeight="500" mb={2} color="gray.700">
                                        Your Name *
                                    </Text>
                                    <Input
                                        placeholder="John Doe"
                                        size="lg"
                                        bg="gray.50"
                                        border="1px solid"
                                        borderColor="gray.200"
                                        borderRadius="lg"
                                        _focus={{ borderColor: THEME_SOLID, bg: "white" }}
                                        _hover={{ borderColor: "gray.300" }}
                                    />
                                </Box>
                                <Box>
                                    <Text fontSize="sm" fontWeight="500" mb={2} color="gray.700">
                                        Email Address *
                                    </Text>
                                    <Input
                                        type="email"
                                        placeholder="john@company.com"
                                        size="lg"
                                        bg="gray.50"
                                        border="1px solid"
                                        borderColor="gray.200"
                                        borderRadius="lg"
                                        _focus={{ borderColor: THEME_SOLID, bg: "white" }}
                                        _hover={{ borderColor: "gray.300" }}
                                    />
                                </Box>
                            </Grid>

                            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={5}>
                                <Box>
                                    <Text fontSize="sm" fontWeight="500" mb={2} color="gray.700">
                                        Phone Number
                                    </Text>
                                    <Input
                                        type="tel"
                                        placeholder="+91 86555 98711"
                                        size="lg"
                                        bg="gray.50"
                                        border="1px solid"
                                        borderColor="gray.200"
                                        borderRadius="lg"
                                        _focus={{ borderColor: THEME_SOLID, bg: "white" }}
                                        _hover={{ borderColor: "gray.300" }}
                                    />
                                </Box>
                                <Box>
                                    <Text fontSize="sm" fontWeight="500" mb={2} color="gray.700">
                                        Company Name
                                    </Text>
                                    <Input
                                        placeholder="Your Company Ltd."
                                        size="lg"
                                        bg="gray.50"
                                        border="1px solid"
                                        borderColor="gray.200"
                                        borderRadius="lg"
                                        _focus={{ borderColor: THEME_SOLID, bg: "white" }}
                                        _hover={{ borderColor: "gray.300" }}
                                    />
                                </Box>
                            </Grid>

                            <Box>
                                <Text fontSize="sm" fontWeight="500" mb={2} color="gray.700">
                                    Message *
                                </Text>
                                <Textarea
                                    placeholder="Tell us about your requirements..."
                                    rows={5}
                                    resize="vertical"
                                    size="lg"
                                    bg="gray.50"
                                    border="1px solid"
                                    borderColor="gray.200"
                                    borderRadius="lg"
                                    _focus={{ borderColor: THEME_SOLID, bg: "white" }}
                                    _hover={{ borderColor: "gray.300" }}
                                />
                            </Box>

                            <Button
                                bg="linear-gradient(135deg, #3182CE 0%, #2B6CB0 100%)"
                                color="white"
                                size="lg"
                                fontSize="md"
                                fontWeight="600"
                                py={7}
                                borderRadius="xl"
                                _hover={{
                                    transform: "translateY(-2px)",
                                    shadow: "lg"
                                }}
                                transition="all 0.2s"
                            >
                                <HStack gap={2}>
                                    <Text>Send Message</Text>
                                    <FiArrowRight />
                                </HStack>
                            </Button>
                        </VStack>
                    </Box>
                </Grid>
            </Container>

            <Footer7 />
        </Box>
    );
}
