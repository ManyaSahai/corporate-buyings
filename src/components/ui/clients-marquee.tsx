"use client";

import { Box, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

interface Logo {
  src: string;
  alt: string;
  link?: string;
}

interface ClientsMarqueeProps {
  logos: Logo[];
  title?: string;
  speed?: number; // Duration in seconds for one complete loop
}

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export function ClientsMarquee({ 
  logos, 
  title = "Our Clients", 
  speed = 30 
}: ClientsMarqueeProps) {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <Box py={{ base: 8, md: 12 }} overflow="hidden">
      {/* Section Title */}
      <Text
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="bold"
        textAlign="center"
        mb={{ base: 6, md: 8 }}
        color="gray.800"
      >
        {title}
      </Text>

      {/* Marquee Container */}
      <Box
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "100px",
          background: "linear-gradient(to right, white, transparent)",
          zIndex: 1,
        }}
        _after={{
          content: '""',
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "100px",
          background: "linear-gradient(to left, white, transparent)",
          zIndex: 1,
        }}
      >
        {/* Scrolling Track */}
        <Box
          display="flex"
          alignItems="center"
          gap={{ base: 8, md: 12 }}
          animation={`${scrollAnimation} ${speed}s linear infinite`}
          width="fit-content"
          _hover={{
            animationPlayState: "paused",
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <Box
              key={`${logo.alt}-${index}`}
              flexShrink={0}
              px={{ base: 4, md: 6 }}
              py={4}
              bg="white"
              borderRadius="xl"
              shadow="sm"
              border="1px solid"
              borderColor="gray.100"
              transition="all 0.3s"
              _hover={{
                shadow: "md",
                transform: "scale(1.05)",
              }}
            >
              {logo.link ? (
                <a href={logo.link}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    style={{
                      height: "50px",
                      width: "auto",
                      objectFit: "contain",
                      filter: "grayscale(30%)",
                      transition: "filter 0.3s",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
                    onMouseOut={(e) => (e.currentTarget.style.filter = "grayscale(30%)")}
                  />
                </a>
              ) : (
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    height: "50px",
                    width: "auto",
                    objectFit: "contain",
                    filter: "grayscale(30%)",
                    transition: "filter 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
                  onMouseOut={(e) => (e.currentTarget.style.filter = "grayscale(30%)")}
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
