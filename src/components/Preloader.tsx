"use client";

import { Box, Text, Image } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { THEME_SOLID } from "@/lib/colors";

const MotionBox = motion.create(Box as React.ComponentType<any>);

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #2a1a4a 100%)`,
            overflow: "hidden",
          }}
        >
          {/* Animated Background Particles */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            overflow="hidden"
            pointerEvents="none"
          >
            {[...Array(20)].map((_, i) => (
              <MotionBox
                key={i}
                position="absolute"
                borderRadius="full"
                bg={i % 2 === 0 ? "rgba(232, 74, 61, 0.3)" : "rgba(42, 52, 140, 0.3)"}
                initial={{
                  x: `${Math.random() * 100}vw`,
                  y: `${Math.random() * 100}vh`,
                  scale: 0,
                }}
                animate={{
                  x: `${Math.random() * 100}vw`,
                  y: `${Math.random() * 100}vh`,
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
                style={{
                  width: `${20 + Math.random() * 40}px`,
                  height: `${20 + Math.random() * 40}px`,
                  filter: "blur(10px)",
                }}
              />
            ))}
          </Box>

          {/* Glowing Ring Effect */}
          <Box
            position="absolute"
            width={{ base: "300px", md: "400px" }}
            height={{ base: "300px", md: "400px" }}
            borderRadius="full"
            border="2px solid"
            borderColor="rgba(232, 74, 61, 0.2)"
            animation="pulse 2s ease-in-out infinite"
            css={{
              "@keyframes pulse": {
                "0%, 100%": { transform: "scale(1)", opacity: 0.5 },
                "50%": { transform: "scale(1.1)", opacity: 0.2 },
              },
            }}
          />
          <Box
            position="absolute"
            width={{ base: "250px", md: "350px" }}
            height={{ base: "250px", md: "350px" }}
            borderRadius="full"
            border="1px solid"
            borderColor="rgba(42, 52, 140, 0.3)"
            animation="pulse2 2.5s ease-in-out infinite"
            css={{
              "@keyframes pulse2": {
                "0%, 100%": { transform: "scale(1)", opacity: 0.3 },
                "50%": { transform: "scale(1.15)", opacity: 0.1 },
              },
            }}
          />

          {/* Main Content */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={6}
            position="relative"
            zIndex={1}
          >
            {/* Logo with Glow */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
              }}
            >
              <Box
                p={6}
                borderRadius="2xl"
                bg="rgba(255, 255, 255, 0.05)"
                backdropFilter="blur(10px)"
                border="1px solid rgba(255, 255, 255, 0.1)"
                boxShadow="0 0 60px rgba(232, 74, 61, 0.3), 0 0 100px rgba(42, 52, 140, 0.2)"
              >
                <Image
                  src="/logo.png"
                  alt="Corporate Buyings"
                  width={{ base: "150px", md: "200px" }}
                  objectFit="contain"
                  filter="drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
                />
              </Box>
            </motion.div>

            {/* Brand Name */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            >
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                bgGradient="linear(to-r, #E84A3D, #667eea, #E84A3D)"
                bgClip="text"
                backgroundSize="200% 100%"
                letterSpacing="widest"
                textTransform="uppercase"
                animation="shimmer 2s linear infinite"
                css={{
                  "@keyframes shimmer": {
                    "0%": { backgroundPosition: "100% 0" },
                    "100%": { backgroundPosition: "-100% 0" },
                  },
                }}
              >
                Corporate Buyings
              </Text>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Text
                fontSize={{ base: "sm", md: "md" }}
                color="gray.400"
                letterSpacing="wide"
              >
                Your B2B Partner for Office & Industrial Supplies
              </Text>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "200px", opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              style={{ overflow: "hidden" }}
            >
              <Box
                width="200px"
                height="4px"
                bg="rgba(255, 255, 255, 0.1)"
                borderRadius="full"
                overflow="hidden"
              >
                <Box
                  height="100%"
                  width={`${progress}%`}
                  bgGradient="linear(to-r, #E84A3D, #667eea)"
                  borderRadius="full"
                  transition="width 0.1s ease-out"
                  boxShadow="0 0 10px rgba(232, 74, 61, 0.5)"
                />
              </Box>
              <Text
                fontSize="xs"
                color="gray.500"
                textAlign="center"
                mt={2}
              >
                Loading... {progress}%
              </Text>
            </motion.div>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
