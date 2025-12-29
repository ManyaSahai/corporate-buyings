"use client";

import { VStack, Box } from "@chakra-ui/react";
import Image from "next/image";
import { SideCard } from "@/types";

interface SideCardsProps {
  cards: SideCard[];
}

export function SideCards({ cards }: SideCardsProps) {
  if (cards.length === 0) {
    return null;
  }

  return (
    <VStack gap={3} height="100%">
      {cards.map((card) => (
        <Box
          key={card.id}
          position="relative"
          width="100%"
          flex={1}
          borderRadius="xl"
          overflow="hidden"
          boxShadow="sm"
          transition="transform 0.2s ease, box-shadow 0.2s ease"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "md",
          }}
        >
          {card.link ? (
            <a href={card.link} style={{ display: "block", height: "100%" }}>
              <Box position="relative" width="100%" height="100%" minHeight="120px">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </a>
          ) : (
            <Box position="relative" width="100%" height="100%" minHeight="120px">
              <Image
                src={card.imageUrl}
                alt={card.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          )}
        </Box>
      ))}
    </VStack>
  );
}
