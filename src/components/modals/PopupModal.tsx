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
} from "@chakra-ui/react";

export default function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const size = useBreakpointValue({ base: "xs", md: "md" });

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <DialogRoot
      open={isOpen}
      onOpenChange={(d) => setIsOpen(d.open)}
      trapFocus={false}
      preventScroll={false}
    >
      {/* Background overlay */}
      <DialogBackdrop bg="blackAlpha.400" backdropFilter="blur(2px)" />

      {/* Floating popup */}
      <DialogContent
        bg="transparent"
        boxShadow="none"
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        maxW={size === "xs" ? "95vw" : "lg"}
        w="full"
        zIndex="2000"
      >
        {/* Close button */}
        <Button
          position="absolute"
          top="-15px"
          right="-10px"
          bg="white"
          color="gray.700"
          variant="solid"
          fontSize="16px"
          fontWeight="bold"
          w="32px"
          h="32px"
          minW="32px"
          borderRadius="full"
          boxShadow="md"
          zIndex="20"
          border="1px solid"
          borderColor="gray.200"
          _hover={{ bg: "gray.100", transform: "scale(1.1)" }}
          transition="all 0.2s"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </Button>

        <DialogBody p={0}>
          {/* Form Container */}
          <Box
            bg="white"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="2xl"
            p={8}
          >
            {/* Header */}
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="blue.900"
              textAlign="center"
              mb={6}
            >
              Contact Form
            </Text>

            <VStack gap={5} align="stretch">
              {/* Name Section */}
              <Box>
                <Text fontWeight="bold" color="gray.600" mb={1} fontSize="sm">
                  Name
                </Text>
                <HStack gap={3}>
                  <Box w="50%">
                    <Input
                      bg="white"
                      borderColor="gray.300"
                      _hover={{ borderColor: "gray.400" }}
                    />
                    <Text fontSize="xs" color="gray.500" mt={1}>
                      First Name
                    </Text>
                  </Box>
                  <Box w="50%">
                    <Input
                      bg="white"
                      borderColor="gray.300"
                      _hover={{ borderColor: "gray.400" }}
                    />
                    <Text fontSize="xs" color="gray.500" mt={1}>
                      Last Name
                    </Text>
                  </Box>
                </HStack>
              </Box>

              {/* Email Section */}
              <Box>
                <Text fontWeight="bold" color="gray.600" mb={1} fontSize="sm">
                  Email
                </Text>
                <Input
                  type="email"
                  bg="white"
                  borderColor="gray.300"
                  _hover={{ borderColor: "gray.400" }}
                />
                <Text fontSize="xs" color="gray.500" mt={1}>
                  example@example.com
                </Text>
              </Box>

              {/* Phone Section */}
              <Box>
                <Text fontWeight="bold" color="gray.600" mb={1} fontSize="sm">
                  Business Phone
                </Text>
                <Input
                  type="tel"
                  placeholder="(000) 000-0000"
                  bg="white"
                  borderColor="gray.300"
                  _hover={{ borderColor: "gray.400" }}
                />
              </Box>

              {/* Message Section */}
              <Box>
                <Text fontWeight="bold" color="gray.600" mb={1} fontSize="sm">
                  Message
                </Text>
                <Textarea
                  rows={4}
                  bg="white"
                  borderColor="gray.300"
                  _hover={{ borderColor: "gray.400" }}
                />
              </Box>

              {/* Submit Button */}
              <Box display="flex" justifyContent="center" mt={2}>
                <Button
                  bg="blue.900"
                  color="white"
                  px={10}
                  py={5}
                  borderRadius="md"
                  _hover={{ bg: "blue.800" }}
                >
                  Submit
                </Button>
              </Box>
            </VStack>
          </Box>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
}
