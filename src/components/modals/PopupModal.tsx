"use client";

import { useEffect, useState } from "react";
import {
  DialogRoot,
  DialogBackdrop,
  DialogContent,
  DialogBody,
  Button,
  useBreakpointValue,
  Box,
  Input,
  Textarea,
  VStack,
  HStack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { FiMail, FiPhone, FiUser, FiMessageSquare, FiX, FiSend } from "react-icons/fi";

export default function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const size = useBreakpointValue({ base: "xs", md: "md" });

  useEffect(() => {
    // Delay popup by 10 seconds after page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); // 10 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <DialogRoot
      open={isOpen}
      onOpenChange={(d) => setIsOpen(d.open)}
      trapFocus={false}
      preventScroll={false}
    >
      {/* Background overlay */}
      <DialogBackdrop 
        bg="blackAlpha.600" 
        backdropFilter="blur(8px)" 
      />

      {/* Floating popup */}
      <DialogContent
        bg="transparent"
        boxShadow="none"
        position="fixed"
        top="45%"
        left="50%"
        transform="translate(-50%, -50%)"
        maxW={size === "xs" ? "95vw" : "480px"}
        w="full"
        maxH="90vh"
        overflow="visible"
        zIndex="2000"
      >
        <DialogBody p={0}>
          {/* Form Container */}
          <Box
            bg="white"
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            position="relative"
          >
            {/* Gradient Header */}
            <Box
              bg="linear-gradient(135deg, #2A348C 0%, #E84A3D 100%)"
              py={8}
              px={6}
              position="relative"
              overflow="hidden"
            >
              {/* Decorative circles */}
              <Box
                position="absolute"
                top="-30px"
                right="-30px"
                w="100px"
                h="100px"
                borderRadius="full"
                bg="whiteAlpha.100"
              />
              <Box
                position="absolute"
                bottom="-20px"
                left="-20px"
                w="80px"
                h="80px"
                borderRadius="full"
                bg="whiteAlpha.100"
              />
              
              {/* Close button */}
              <Button
                position="absolute"
                top="12px"
                right="12px"
                bg="whiteAlpha.200"
                color="white"
                variant="ghost"
                w="36px"
                h="36px"
                minW="36px"
                borderRadius="full"
                _hover={{ bg: "whiteAlpha.300", transform: "rotate(90deg)" }}
                transition="all 0.3s"
                onClick={() => setIsOpen(false)}
              >
                <FiX size={20} />
              </Button>

              <VStack gap={2} position="relative" zIndex={1}>
                <Box
                  bg="whiteAlpha.200"
                  p={3}
                  borderRadius="full"
                >
                  <FiMessageSquare size={28} color="white" />
                </Box>
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color="white"
                  textAlign="center"
                >
                  Get in Touch
                </Text>
                <Text
                  fontSize="sm"
                  color="whiteAlpha.800"
                  textAlign="center"
                >
                  We&apos;d love to hear from you!
                </Text>
              </VStack>
            </Box>

            {/* Form Body */}
            <Box 
              p={6} 
              maxH="60vh" 
              overflowY="auto"
              css={{
                '&::-webkit-scrollbar': {
                  width: '4px',
                },
                '&::-webkit-scrollbar-track': {
                  background: '#f1f1f1',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: '#c1c1c1',
                  borderRadius: '4px',
                },
              }}
            >
              <VStack gap={4} align="stretch">
                {/* Name Section */}
                <HStack gap={3}>
                  <Box flex={1}>
                    <Flex align="center" gap={2} mb={2}>
                      <FiUser size={14} color="#6B7280" />
                      <Text fontWeight="600" color="gray.600" fontSize="sm">
                        First Name
                      </Text>
                    </Flex>
                    <Input
                      placeholder="John"
                      bg="gray.50"
                      border="2px solid"
                      borderColor="gray.200"
                      borderRadius="xl"
                      _hover={{ borderColor: "blue.300" }}
                      _focus={{ borderColor: "blue.500", bg: "white" }}
                      transition="all 0.2s"
                    />
                  </Box>
                  <Box flex={1}>
                    <Flex align="center" gap={2} mb={2}>
                      <FiUser size={14} color="#6B7280" />
                      <Text fontWeight="600" color="gray.600" fontSize="sm">
                        Company Name
                      </Text>
                    </Flex>
                    <Input
                      placeholder="Doe"
                      bg="gray.50"
                      border="2px solid"
                      borderColor="gray.200"
                      borderRadius="xl"
                      _hover={{ borderColor: "blue.300" }}
                      _focus={{ borderColor: "blue.500", bg: "white" }}
                      transition="all 0.2s"
                    />
                  </Box>
                </HStack>

                {/* Email Section */}
                <Box>
                  <Flex align="center" gap={2} mb={2}>
                    <FiMail size={14} color="#6B7280" />
                    <Text fontWeight="600" color="gray.600" fontSize="sm">
                      Email Address
                    </Text>
                  </Flex>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    bg="gray.50"
                    border="2px solid"
                    borderColor="gray.200"
                    borderRadius="xl"
                    _hover={{ borderColor: "blue.300" }}
                    _focus={{ borderColor: "blue.500", bg: "white" }}
                    transition="all 0.2s"
                  />
                </Box>

                {/* Phone Section */}
                <Box>
                  <Flex align="center" gap={2} mb={2}>
                    <FiPhone size={14} color="#6B7280" />
                    <Text fontWeight="600" color="gray.600" fontSize="sm">
                      Business Phone
                    </Text>
                  </Flex>
                  <Input
                    type="tel"
                    placeholder="+91 98765 43210"
                    bg="gray.50"
                    border="2px solid"
                    borderColor="gray.200"
                    borderRadius="xl"
                    _hover={{ borderColor: "blue.300" }}
                    _focus={{ borderColor: "blue.500", bg: "white" }}
                    transition="all 0.2s"
                  />
                </Box>

                {/* Message Section */}
                <Box>
                  <Flex align="center" gap={2} mb={2}>
                    <FiMessageSquare size={14} color="#6B7280" />
                    <Text fontWeight="600" color="gray.600" fontSize="sm">
                      Message
                    </Text>
                  </Flex>
                  <Textarea
                    placeholder="Tell us about your requirements..."
                    rows={3}
                    bg="gray.50"
                    border="2px solid"
                    borderColor="gray.200"
                    borderRadius="xl"
                    _hover={{ borderColor: "blue.300" }}
                    _focus={{ borderColor: "blue.500", bg: "white" }}
                    transition="all 0.2s"
                    resize="none"
                  />
                </Box>

                {/* Submit Button */}
                <Button
                  bg="linear-gradient(135deg, #2A348C 0%, #E84A3D 100%)"
                  color="white"
                  size="lg"
                  borderRadius="xl"
                  mt={2}
                  _hover={{ 
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 20px -5px rgba(42, 52, 140, 0.4)"
                  }}
                  transition="all 0.3s"
                  onClick={() => {
                    alert("Thank you! We'll get back to you soon.");
                    setIsOpen(false);
                  }}
                >
                  <Flex align="center" gap={2}>
                    <FiSend size={18} />
                    <Text>Send Message</Text>
                  </Flex>
                </Button>

                {/* Privacy Note */}
                <Text fontSize="xs" color="gray.400" textAlign="center">
                  By submitting, you agree to our Privacy Policy
                </Text>
              </VStack>
            </Box>
          </Box>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
}
