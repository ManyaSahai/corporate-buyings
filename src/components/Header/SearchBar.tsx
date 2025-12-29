"use client";

import { Box, Flex, Input } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export function SearchBar() {
  return (
    <Flex
      align="center"
      bg="gray.100"
      borderRadius="2xl"
      overflow="hidden"
      border="1px solid"
      borderColor="gray.200"
      _focusWithin={{
        borderColor: "blue.400",
        bg: "white",
      }}
      transition="all 0.2s"
    >
      <Box pl={3} color="gray.400">
        <FiSearch size={18} />
      </Box>
      <Input
        placeholder="Search for products, brands and more"
        border="none"
        bg="transparent"
        px={3}
        py={2}
        fontSize="sm"
        _focus={{
          outline: "none",
          boxShadow: "none",
        }}
        _placeholder={{
          color: "gray.400",
        }}
      />
    </Flex>
  );
}
