"use client";

import React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Flex,
  Text,
  Link,
  HStack,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";

interface Footer7Props {
  companyName?: string;
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
}

const defaultFeatures = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d92027"
        strokeWidth="1.5"
      >
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
    title: "Great Value",
    description:
      "Most popular brands with widest range of selection at best prices.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d92027"
        strokeWidth="1.5"
      >
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Pan India Delivery",
    description: "Over 16,000+ pincodes serviceable across India.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2563eb"
        strokeWidth="1.5"
      >
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
        <path d="M12 15h4" />
      </svg>
    ),
    title: "Secure Payment",
    description:
      "Partnered with India's most popular and secure payment solutions.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d92027"
        strokeWidth="1.5"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "Buyer Protection",
    description:
      "Committed to buyer interests to provide a smooth shopping experience.",
  },
];

const defaultSections = [
  {
    title: "Corporate Buyings",
    links: [
      { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" },
      { name: "Careers", href: "#" },
      { name: "Partner With Us", href: "#" },
      { name: "Corporate Social Responsibility", href: "#" },
      { name: "In the News", href: "#" },
   
    ],
  },
  {
    title: "Shop",
    links: [
      { name: "Switchgears", href: "/cart" },
      { name: "Wires & Cables", href: "/contact" },
      { name: "Motors", href: "#" },
      { name: "Gearboxes", href: "#" },
          { name: "Lighting", href: "#" },
              { name: "Bearings", href: "#" },
    ],
  },
   {
    title: "Categories",
    links: [
      { name: "Safety and PPE", href: "#" },
      { name: "Solar", href: "#" },
      { name: "Drives", href: "#" },
      { name: "Pneumatics", href: "#" },
      { name: "Lubricants", href: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "Terms & Conditions", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Return & Refund Policy", href: "#" },
      { name: "Shipping Policy", href: "#" },
      { name: "Customer Support", href: "#" },
    ],
  },
  
  {
    title: "Miscellaneous",
    links: [
      { name: "Bulk Enquiry", href: "/contact" },
      { name: "Business Solutions", href: "#" },
      { name: "Supplier Central", href: "#" },
      { name: "Partner With Us", href: "#" },
    ],
  },
];

export const Footer7 = ({
  companyName = "Corporate Buyings",
  sections = defaultSections,
}: Footer7Props) => {
  return (
    <Box as="footer" overflowX="hidden">
      {/* Top Features Section */}
      <Box
        bg="white"
        py={{ base: 6, md: 10 }}
        borderTopWidth="1px"
        borderBottomWidth="1px"
        borderColor="gray.100"
      >
        <Container maxW="container.xl" px={{ base: 4, lg: 8 }}>
          <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: 6, md: 0 }}>
            {defaultFeatures.map((feature, idx) => (
              <Flex
                key={idx}
                direction="column"
                align="flex-start"
                px={{ base: 0, md: 6 }}
                borderRightWidth={{
                  base: 0,
                  md: idx < defaultFeatures.length - 1 ? "1px" : 0,
                }}
                borderColor="gray.100"
              >
                <Box mb={3}>{feature.icon}</Box>
                <Text fontWeight="600" fontSize="13px" color="gray.900" mb={1}>
                  {feature.title}
                </Text>
                <Text fontSize="11px" color="gray.500" lineHeight="1.5">
                  {feature.description}
                </Text>

                {feature.title === "Secure Payment" && (
                  <HStack gap={4} mt={3} align="center">
                    <Box as="span">
                      <Image
                        src="/img/visa-icon.svg"
                        alt="Visa"
                        width={40}
                        height={24}
                      />
                    </Box>
                    <Box as="span">
                      <Image
                        src="/img/master-card-icon.svg"
                        alt="Mastercard"
                        width={40}
                        height={24}
                      />
                    </Box>
                    <Box as="span">
                      <Image
                        src="/img/razorpay-icon.svg"
                        alt="Razorpay"
                        width={48}
                        height={24}
                      />
                    </Box>
                  </HStack>
                )}
              </Flex>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Links Section */}
      <Box bg="gray.50" py={{ base: 8, md: 12 }}>
        <Container maxW="container.xl" px={{ base: 4, lg: 8 }}>
          <SimpleGrid
            columns={{ base: 2, sm: 3, md: 5 }}
            gap={{ base: 6, md: 8, lg: 12 }}
          >
            {sections.map((section, sectionIdx) => (
              <VStack key={sectionIdx} align="flex-start" gap={3}>
                <Text fontWeight="600" fontSize="13px" color="gray.800" mb={1}>
                  {section.title}
                </Text>
                <VStack align="flex-start" gap={2}>
                  {section.links.map((link, linkIdx) => (
                    <Link
                      key={linkIdx}
                      href={link.href}
                      fontSize="12px"
                      color="#2563eb"
                      _hover={{
                        color: "#1d4ed8",
                        textDecoration: "underline",
                      }}
                      transition="color 0.2s"
                    >
                      {link.name}
                    </Link>
                  ))}
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Payment & Bottom Navigation Section */}
      <Box bg="gray.100" py={6} borderTopWidth="1px" borderColor="gray.200">
        <Container maxW="container.xl" px={{ base: 4, lg: 8 }}>
          {/* Payment Icons */}
          <Flex 
            justify="center" 
            align="center" 
            mb={4}
            gap={6}
            flexWrap="wrap"
          >
            <Text fontSize="12px" color="gray.500" fontWeight="500">
              Secure Payments:
            </Text>
            <HStack gap={4}>
              <Box 
                bg="white" 
                px={3} 
                py={2} 
                borderRadius="md" 
                shadow="sm"
                border="1px solid"
                borderColor="gray.200"
              >
                <Image
                  src="/img/razorpay-icon.svg"
                  alt="Razorpay"
                  width={60}
                  height={20}
                />
              </Box>
              <Box 
                bg="white" 
                px={3} 
                py={2} 
                borderRadius="md" 
                shadow="sm"
                border="1px solid"
                borderColor="gray.200"
              >
                <Image
                  src="/img/visa-icon.svg"
                  alt="Visa"
                  width={40}
                  height={20}
                />
              </Box>
              <Box 
                bg="white" 
                px={3} 
                py={2} 
                borderRadius="md" 
                shadow="sm"
                border="1px solid"
                borderColor="gray.200"
              >
                <Image
                  src="/img/master-card-icon.svg"
                  alt="Mastercard"
                  width={40}
                  height={20}
                />
              </Box>
            </HStack>
          </Flex>

          {/* Bottom Navigation Links */}
          <Flex 
            justify="center" 
            align="center" 
            gap={{ base: 3, md: 6 }}
            mb={4}
            flexWrap="wrap"
          >
            <Link href="/about" fontSize="11px" color="gray.600" _hover={{ color: "#2563eb" }}>
              About Us
            </Link>
            <Text color="gray.300">|</Text>
            <Link href="/contact" fontSize="11px" color="gray.600" _hover={{ color: "#2563eb" }}>
              Contact
            </Link>
            <Text color="gray.300">|</Text>
            <Link href="#" fontSize="11px" color="gray.600" _hover={{ color: "#2563eb" }}>
              Privacy Policy
            </Link>
            <Text color="gray.300">|</Text>
            <Link href="#" fontSize="11px" color="gray.600" _hover={{ color: "#2563eb" }}>
              Terms & Conditions
            </Link>
            <Text color="gray.300">|</Text>
            <Link href="#" fontSize="11px" color="gray.600" _hover={{ color: "#2563eb" }}>
              Shipping
            </Link>
            <Text color="gray.300">|</Text>
            <Link href="#" fontSize="11px" color="gray.600" _hover={{ color: "#2563eb" }}>
              Returns
            </Link>
          </Flex>

          {/* Copyright */}
          <Text fontSize="11px" color="gray.400" textAlign="center">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
};
