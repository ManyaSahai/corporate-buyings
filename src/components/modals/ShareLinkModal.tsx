"use client";

import React, { useState } from "react";
import { Box, Flex, Text, VStack, Button, HStack } from "@chakra-ui/react";
import { FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin, FaCopy, FaCheck } from "react-icons/fa";

interface ShareLinkModalProps {
    isOpen: boolean;
    onClose: () => void;
    productTitle: string;
    productUrl: string;
}

export function ShareLinkModal({ isOpen, onClose, productTitle, productUrl }: ShareLinkModalProps) {
    const [copied, setCopied] = useState(false);

    if (!isOpen) return null;

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(productUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement("textarea");
            textArea.value = productUrl;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const shareLinks = [
        {
            name: "WhatsApp",
            icon: FaWhatsapp,
            color: "#25D366",
            url: `https://wa.me/?text=${encodeURIComponent(`Check out this product: ${productTitle} - ${productUrl}`)}`,
        },
        {
            name: "Facebook",
            icon: FaFacebook,
            color: "#1877F2",
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`,
        },
        {
            name: "Twitter",
            icon: FaTwitter,
            color: "#1DA1F2",
            url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out this product: ${productTitle}`)}&url=${encodeURIComponent(productUrl)}`,
        },
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            color: "#0A66C2",
            url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(productUrl)}&title=${encodeURIComponent(productTitle)}`,
        },
    ];

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="blackAlpha.600"
            zIndex={1000}
            display="flex"
            alignItems="center"
            justifyContent="center"
            onClick={onClose}
        >
            <Box
                bg="white"
                rounded="2xl"
                p={6}
                maxW="400px"
                w="90%"
                onClick={(e) => e.stopPropagation()}
            >
                <Flex justify="space-between" align="center" mb={4}>
                    <Text fontWeight="bold" fontSize="lg" color="gray.900">
                        Share this product
                    </Text>
                    <Box
                        as="button"
                        onClick={onClose}
                        p={2}
                        cursor="pointer"
                        color="gray.500"
                        _hover={{ color: "gray.700" }}
                    >
                        ✕
                    </Box>
                </Flex>

                <Text fontSize="sm" color="gray.600" mb={4}>
                    {productTitle}
                </Text>

                {/* Social Share Buttons */}
                <HStack gap={3} justify="center" mb={6}>
                    {shareLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                backgroundColor: link.color,
                                color: "white",
                            }}
                        >
                            <link.icon size={24} />
                        </a>
                    ))}
                </HStack>

                {/* Copy Link Section */}
                <Box>
                    <Text fontSize="sm" fontWeight="medium" mb={2}>
                        Or copy link
                    </Text>
                    <Flex
                        bg="gray.50"
                        rounded="xl"
                        border="1px solid"
                        borderColor="gray.200"
                        overflow="hidden"
                    >
                        <Box
                            flex={1}
                            px={3}
                            py={2}
                            overflow="hidden"
                            textOverflow="ellipsis"
                            whiteSpace="nowrap"
                        >
                            <Text fontSize="sm" color="gray.600">
                                {productUrl}
                            </Text>
                        </Box>
                        <Button
                            colorScheme={copied ? "green" : "blue"}
                            rounded="none"
                            onClick={handleCopyLink}
                            minW="80px"
                        >
                            {copied ? <FaCheck /> : <FaCopy />}
                            <Text ml={2}>{copied ? "Copied!" : "Copy"}</Text>
                        </Button>
                    </Flex>
                </Box>

                <Button
                    w="full"
                    variant="ghost"
                    mt={4}
                    onClick={onClose}
                >
                    Close
                </Button>
            </Box>
        </Box>
    );
}
