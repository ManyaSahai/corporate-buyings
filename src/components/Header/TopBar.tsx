"use client";

import { Box, Flex, Text, Button, Icon } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "./SearchBar";
import { BG_COLOR } from "@/lib/colors";

export function TopBar() {
  return (
    <Box
      bg="transparent"
      py={2}
      borderBottom="1px solid"
      borderColor="gray.200"
      h="60px"
    >
      <Flex
        maxW="1400px"
        mx="auto"
        px={4}
        h="100%"
        align="center"
        justify="space-between"
        gap={4}
        position="relative"
      >
        {/* Logo */}
        <Flex align="center" gap={3} flexShrink={0}>
          <Link href="/">
            <Box cursor="pointer">
              <Image
                src="/logo.png"
                alt="Corporate Buyings"
                width={160}
                height={48}
                style={{ objectFit: "contain" }}
                priority
              />
            </Box>
          </Link>
        </Flex>

        {/* Search Bar - Absolutely Centered */}
        <Box
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          w="100%"
          maxW="400px"
          display={{ base: "none", md: "block" }}
        >
          <SearchBar />
        </Box>

        {/* Right Side Actions */}
        <Flex align="center" gap={3} flexShrink={0}>
          {/* Login Button */}
          <Link href="/login">
            <Button
              size="xs"
              variant="ghost"
              color="gray.700"
              borderRadius="2xl"
              px={3}
              display={{ base: "none", md: "flex" }}
            >
              Login
            </Button>
          </Link>
          {/* Go to Site Button */}
          <a
            href="https://corporatebuyings.com/Index"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="xs"
              variant="solid"
              bg="linear-gradient(135deg, #E84A3D 0%, #2A348C 100%)"
              color="white"
              borderRadius="2xl"
              px={3}
              _hover={{ opacity: 0.9 }}
            >
      Corporate Website
            </Button>
          </a>

          {/* Cart */}
          <Link href="/cart">
            <Flex align="center" gap={1} cursor="pointer" position="relative">
              <Box color="gray.700" position="relative">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
                {/* Cart Badge */}
                <Box
                  position="absolute"
                  top="-8px"
                  right="-8px"
                  bg="red.500"
                  color="white"
                  borderRadius="full"
                  width="18px"
                  height="18px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="10px"
                  fontWeight="bold"
                >
                  6
                </Box>
              </Box>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
