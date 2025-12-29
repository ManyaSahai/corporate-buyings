"use client";

import { Box } from "@chakra-ui/react";
import { TopBar } from "./TopBar";
import { NavBar } from "./NavBar";
import { BG_GRADIENT_MESH } from "@/lib/colors";

interface HeaderProps {
  isSticky?: boolean;
}

export function Header({ isSticky = true }: HeaderProps) {
  return (
    <Box
      as="header"
      position={isSticky ? "sticky" : "relative"}
      top={0}
      zIndex={1000}
      bg={BG_GRADIENT_MESH}
      backdropFilter="blur(12px)"
    >
      <TopBar />
      <NavBar />
    </Box>
  );
}
