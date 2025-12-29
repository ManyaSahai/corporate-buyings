import { Box } from "@chakra-ui/react";

export function BackgroundDecor() {
  return (
    <Box position="absolute" inset={0} pointerEvents="none" zIndex={0}>
      {/* Soft top-left gradient blob */}
      <Box
        position="absolute"
        top={-40}
        left={-40}
        width={["240px", "320px", "420px"]}
        height={["240px", "320px", "420px"]}
        bgGradient="radial(circle at 20% 20%, rgba(255,165,0,0.12), transparent 40%)"
        filter="blur(30px)"
        opacity={0.9}
        transform="rotate(15deg)"
        borderRadius="full"
      />

      {/* Subtle bottom-right rotated rectangle */}
      <Box
        position="absolute"
        right={-80}
        bottom={-80}
        width={["320px", "420px", "600px"]}
        height={["220px", "300px", "360px"]}
        bgGradient="linear(to-r, rgba(99,102,241,0.06), rgba(236,72,153,0.06))"
        transform="rotate(-12deg)"
        filter="blur(28px)"
        borderRadius="16px"
        opacity={0.95}
      />

      {/* Floating dots */}
      <Box
        position="absolute"
        top={["30%", "25%"]}
        right={["10%", "15%"]}
        width="8px"
        height="8px"
        bg="rgba(68,68,68,0.06)"
        borderRadius="full"
        boxShadow="0 8px 24px rgba(0,0,0,0.04)"
      />
      <Box
        position="absolute"
        top={["45%", "42%"]}
        left={["6%", "8%"]}
        width="10px"
        height="10px"
        bg="rgba(255,165,0,0.08)"
        borderRadius="full"
      />
    </Box>
  );
}
