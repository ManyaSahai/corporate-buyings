"use client";

import { Box } from "@chakra-ui/react";

export default function BackgroundDecor() {
  return (
    <>
      {/* Very Large Subtle Background Blobs */}
      <Box
        position="absolute"
        top="-150px"
        right="-150px"
        w="600px"
        h="600px"
        bg="rgba(42, 52, 140, 0.08)"
        borderRadius="50%"
        filter="blur(80px)"
        zIndex={0}
      />

      <Box
        position="absolute"
        bottom="-200px"
        right="-100px"
        w="700px"
        h="700px"
        bg="rgba(232, 74, 61, 0.06)"
        borderRadius="50%"
        filter="blur(100px)"
        zIndex={0}
      />

      <Box
        position="absolute"
        top="40%"
        left="-150px"
        w="500px"
        h="500px"
        bg="rgba(42, 52, 140, 0.06)"
        borderRadius="50%"
        filter="blur(80px)"
        zIndex={0}
      />

      <Box
        position="absolute"
        top="70%"
        right="30%"
        w="400px"
        h="400px"
        bg="rgba(232, 74, 61, 0.05)"
        borderRadius="50%"
        filter="blur(70px)"
        zIndex={0}
      />

      {/* Large Geometric Shapes - Visible Outlines */}
      <Box
        position="absolute"
        top="8%"
        left="12%"
        w="180px"
        h="180px"
        border="2px solid rgba(42, 52, 140, 0.15)"
        borderRadius="full"
        animation="float 15s ease-in-out infinite"
      />

      <Box
        position="absolute"
        top="18%"
        right="18%"
        w="160px"
        h="160px"
        border="2px solid rgba(232, 74, 61, 0.12)"
        borderRadius="30px"
        animation="float 18s ease-in-out infinite"
        transform="rotate(15deg)"
      />

      <Box
        position="absolute"
        top="50%"
        left="8%"
        w="220px"
        h="220px"
        border="2px solid rgba(42, 52, 140, 0.12)"
        borderRadius="full"
        animation="float 20s ease-in-out infinite"
      />

      <Box
        position="absolute"
        top="65%"
        right="10%"
        w="200px"
        h="200px"
        border="2px solid rgba(232, 74, 61, 0.1)"
        borderRadius="40px"
        animation="float 16s ease-in-out infinite"
        transform="rotate(-10deg)"
      />

      <Box
        position="absolute"
        top="30%"
        left="45%"
        w="250px"
        h="250px"
        border="1px solid rgba(42, 52, 140, 0.1)"
        borderRadius="full"
        animation="float 22s ease-in-out infinite"
      />

      <Box
        position="absolute"
        top="82%"
        left="28%"
        w="240px"
        h="240px"
        border="2px solid rgba(232, 74, 61, 0.08)"
        borderRadius="50px"
        animation="float 19s ease-in-out infinite"
        transform="rotate(20deg)"
      />

      {/* Medium Shapes scattered across */}
      <Box
        position="absolute"
        top="10%"
        left="55%"
        w="100px"
        h="100px"
        bg="rgba(42, 52, 140, 0.08)"
        borderRadius="full"
        animation="float 12s ease-in-out infinite"
      />

      <Box
        position="absolute"
        top="38%"
        right="8%"
        w="90px"
        h="90px"
        bg="rgba(232, 74, 61, 0.08)"
        borderRadius="20px"
        animation="float 14s ease-in-out infinite"
        transform="rotate(45deg)"
      />

      <Box
        position="absolute"
        top="58%"
        left="25%"
        w="120px"
        h="120px"
        border="2px solid rgba(42, 52, 140, 0.12)"
        borderRadius="full"
        animation="float 17s ease-in-out infinite"
      />

      <Box
        position="absolute"
        top="72%"
        left="60%"
        w="140px"
        h="140px"
        bg="rgba(232, 74, 61, 0.06)"
        borderRadius="30px"
        animation="float 13s ease-in-out infinite"
        transform="rotate(-15deg)"
      />

      <Box
        position="absolute"
        top="45%"
        left="72%"
        w="110px"
        h="110px"
        border="2px solid rgba(42, 52, 140, 0.1)"
        borderRadius="full"
        animation="float 16s ease-in-out infinite"
      />

      <Box
        position="absolute"
        top="88%"
        right="35%"
        w="150px"
        h="150px"
        border="2px solid rgba(232, 74, 61, 0.1)"
        borderRadius="40px"
        animation="float 21s ease-in-out infinite"
        transform="rotate(30deg)"
      />

      {/* Small floating elements */}
      <Box
        position="absolute"
        top="15%"
        left="28%"
        w="50px"
        h="50px"
        border="2px solid rgba(42, 52, 140, 0.2)"
        borderRadius="full"
        animation="float 8s ease-in-out infinite"
      />

      <Box
        position="absolute"
        top="25%"
        right="28%"
        w="45px"
        h="45px"
        bg="rgba(232, 74, 61, 0.1)"
        borderRadius="lg"
        animation="float 10s ease-in-out infinite"
        transform="rotate(15deg)"
      />

      <Box
        position="absolute"
        top="62%"
        left="15%"
        w="40px"
        h="40px"
        border="2px solid rgba(232, 74, 61, 0.15)"
        borderRadius="full"
        animation="float 9s ease-in-out infinite"
      />

      <Box
        position="absolute"
        top="55%"
        right="22%"
        w="55px"
        h="55px"
        bg="rgba(42, 52, 140, 0.1)"
        borderRadius="md"
        animation="float 11s ease-in-out infinite"
        transform="rotate(45deg)"
      />

      <Box
        position="absolute"
        top="78%"
        left="78%"
        w="60px"
        h="60px"
        border="2px solid rgba(42, 52, 140, 0.15)"
        borderRadius="full"
        animation="float 12s ease-in-out infinite"
      />

      <Box
        position="absolute"
        top="22%"
        left="82%"
        w="65px"
        h="65px"
        bg="rgba(232, 74, 61, 0.08)"
        borderRadius="xl"
        animation="float 13s ease-in-out infinite"
      />

      {/* Triangle shapes */}
      <Box
        position="absolute"
        top="25%"
        left="48%"
        w="0"
        h="0"
        borderLeft="35px solid transparent"
        borderRight="35px solid transparent"
        borderBottom="60px solid rgba(42, 52, 140, 0.1)"
        animation="float 14s ease-in-out infinite"
      />

      <Box
        position="absolute"
        top="68%"
        right="18%"
        w="0"
        h="0"
        borderLeft="28px solid transparent"
        borderRight="28px solid transparent"
        borderBottom="48px solid rgba(232, 74, 61, 0.08)"
        animation="float 16s ease-in-out infinite"
      />

      <Box
        position="absolute"
        top="52%"
        left="5%"
        w="0"
        h="0"
        borderLeft="22px solid transparent"
        borderRight="22px solid transparent"
        borderBottom="38px solid rgba(42, 52, 140, 0.1)"
        animation="float 11s ease-in-out infinite"
      />

      {/* Diamond shapes */}
      <Box
        position="absolute"
        top="42%"
        left="38%"
        w="70px"
        h="70px"
        border="2px solid rgba(42, 52, 140, 0.12)"
        animation="float 15s ease-in-out infinite"
        transform="rotate(45deg)"
      />

      <Box
        position="absolute"
        top="75%"
        right="25%"
        w="60px"
        h="60px"
        bg="rgba(232, 74, 61, 0.08)"
        animation="float 18s ease-in-out infinite"
        transform="rotate(45deg)"
      />

      {/* Plus/Cross shapes */}
      <Box
        position="absolute"
        top="18%"
        right="12%"
        animation="float 10s ease-in-out infinite"
      >
        <Box
          w="45px"
          h="8px"
          bg="rgba(42, 52, 140, 0.15)"
          borderRadius="full"
          position="absolute"
          top="18px"
          left="0"
        />
        <Box
          w="8px"
          h="45px"
          bg="rgba(42, 52, 140, 0.15)"
          borderRadius="full"
          position="absolute"
          top="0"
          left="18px"
        />
      </Box>

      <Box
        position="absolute"
        top="58%"
        left="48%"
        animation="float 13s ease-in-out infinite"
      >
        <Box
          w="35px"
          h="6px"
          bg="rgba(232, 74, 61, 0.12)"
          borderRadius="full"
          position="absolute"
          top="14px"
          left="0"
        />
        <Box
          w="6px"
          h="35px"
          bg="rgba(232, 74, 61, 0.12)"
          borderRadius="full"
          position="absolute"
          top="0"
          left="14px"
        />
      </Box>

      <Box
        position="absolute"
        top="85%"
        left="65%"
        animation="float 11s ease-in-out infinite"
      >
        <Box
          w="30px"
          h="5px"
          bg="rgba(42, 52, 140, 0.12)"
          borderRadius="full"
          position="absolute"
          top="12px"
          left="0"
        />
        <Box
          w="5px"
          h="30px"
          bg="rgba(42, 52, 140, 0.12)"
          borderRadius="full"
          position="absolute"
          top="0"
          left="12px"
        />
      </Box>

      {/* Large ring shapes */}
      <Box
        position="absolute"
        top="12%"
        left="32%"
        w="130px"
        h="130px"
        border="3px solid rgba(42, 52, 140, 0.12)"
        borderRadius="full"
        animation="float 20s ease-in-out infinite"
      />

      <Box
        position="absolute"
        top="55%"
        right="15%"
        w="160px"
        h="160px"
        border="3px solid rgba(232, 74, 61, 0.1)"
        borderRadius="full"
        animation="float 22s ease-in-out infinite"
      />

      <Box
        position="absolute"
        top="78%"
        left="12%"
        w="180px"
        h="180px"
        border="3px solid rgba(42, 52, 140, 0.1)"
        borderRadius="full"
        animation="float 18s ease-in-out infinite"
      />

      {/* Additional shapes near testimonial section */}
      <Box
        position="absolute"
        top="92%"
        left="5%"
        w="200px"
        h="200px"
        border="2px solid rgba(232, 74, 61, 0.1)"
        borderRadius="full"
        animation="float 16s ease-in-out infinite"
      />

      <Box
        position="absolute"
        top="95%"
        right="8%"
        w="170px"
        h="170px"
        border="3px solid rgba(42, 52, 140, 0.12)"
        borderRadius="40px"
        animation="float 19s ease-in-out infinite"
        transform="rotate(15deg)"
      />

      <Box
        position="absolute"
        top="90%"
        left="35%"
        w="120px"
        h="120px"
        bg="rgba(42, 52, 140, 0.06)"
        borderRadius="full"
        animation="float 14s ease-in-out infinite"
      />

      <Box
        position="absolute"
        top="88%"
        right="30%"
        w="100px"
        h="100px"
        border="2px solid rgba(232, 74, 61, 0.1)"
        borderRadius="full"
        animation="float 17s ease-in-out infinite"
      />

      <Box
        position="absolute"
        top="93%"
        left="55%"
        w="80px"
        h="80px"
        bg="rgba(232, 74, 61, 0.08)"
        borderRadius="20px"
        animation="float 12s ease-in-out infinite"
        transform="rotate(25deg)"
      />

      <Box
        position="absolute"
        top="96%"
        left="20%"
        w="60px"
        h="60px"
        border="2px solid rgba(42, 52, 140, 0.15)"
        animation="float 10s ease-in-out infinite"
        transform="rotate(45deg)"
      />

      <Box
        position="absolute"
        top="89%"
        right="50%"
        w="0"
        h="0"
        borderLeft="30px solid transparent"
        borderRight="30px solid transparent"
        borderBottom="52px solid rgba(42, 52, 140, 0.1)"
        animation="float 15s ease-in-out infinite"
      />

      <Box
        position="absolute"
        top="94%"
        right="15%"
        animation="float 13s ease-in-out infinite"
      >
        <Box
          w="40px"
          h="6px"
          bg="rgba(232, 74, 61, 0.12)"
          borderRadius="full"
          position="absolute"
          top="17px"
          left="0"
        />
        <Box
          w="6px"
          h="40px"
          bg="rgba(232, 74, 61, 0.12)"
          borderRadius="full"
          position="absolute"
          top="0"
          left="17px"
        />
      </Box>

      <Box
        position="absolute"
        top="97%"
        left="75%"
        w="90px"
        h="90px"
        border="2px solid rgba(42, 52, 140, 0.1)"
        borderRadius="full"
        animation="float 20s ease-in-out infinite"
      />

      <Box
        position="absolute"
        top="91%"
        left="85%"
        w="50px"
        h="50px"
        bg="rgba(232, 74, 61, 0.08)"
        borderRadius="lg"
        animation="float 11s ease-in-out infinite"
        transform="rotate(30deg)"
      />

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-25px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </>
  );
}
