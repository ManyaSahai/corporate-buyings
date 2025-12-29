"use client";

import { Box, Text, Image } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { BG_GRADIENT_MESH } from "@/lib/colors"; // Assuming this is available, or fallback to white

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500); // Display for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
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
            backgroundColor: "#ffffff", // Fallback or use theme color
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={4}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/logo.png"
                alt="Corporate Buyings"
                width="200px" // Adjusted size
                objectFit="contain"
              />
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="gray.700"
                letterSpacing="wide"
                textTransform="uppercase"
              >
                Corporate Buyings
              </Text>
            </motion.div>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
