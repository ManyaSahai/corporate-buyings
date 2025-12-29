"use client";

import { IconButton } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
    phoneNumber?: string;
}

export function WhatsAppButton({ phoneNumber = "918655598711" }: WhatsAppButtonProps) {
    return (
        <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: "fixed",
                bottom: "30px",
                right: "30px",
                zIndex: 999,
            }}
        >
            <IconButton
                _icon={{ w: 7, h: 7 }}
                bg="#25D366"
                color="white"
                rounded="full"
                size="lg"
                w="60px"
                h="60px"
                shadow="xl"
                aria-label="Contact on WhatsApp"
                _hover={{ transform: "scale(1.1)", bg: "#20BD5A" }}
                transition="all 0.2s"
            >
                <FaWhatsapp size={28} />
            </IconButton>
        </a>
    );
}
