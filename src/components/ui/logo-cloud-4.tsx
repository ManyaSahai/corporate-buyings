"use client";

import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Link from "next/link";

type Logo = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    link?: string;
};

interface LogoCloudProps {
    logos: Logo[];
}

// Helper to shuffle array with a seed for consistent shuffling per row
function shuffleLogos(logos: Logo[], seed: number): Logo[] {
    const shuffled = [...logos];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor((Math.sin(seed * (i + 1)) * 0.5 + 0.5) * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export function LogoCloud({ logos }: LogoCloudProps) {
    // Create 4 rows with different logo orders
    const rows = [
        { logos: shuffleLogos(logos, 1), reverse: false, speed: 50 },
        { logos: shuffleLogos(logos, 2), reverse: true, speed: 45 },
        { logos: shuffleLogos(logos, 3), reverse: false, speed: 55 },
        { logos: shuffleLogos(logos, 4), reverse: true, speed: 40 },
    ];

    const renderLogo = (logo: Logo, rowIndex: number, logoIndex: number) => {
        const imgElement = (
            <img
                src={logo.src}
                alt={logo.alt}
                style={{
                    height: "40px",
                    width: "auto",
                    objectFit: "contain",
                    userSelect: "none",
                    opacity: 0.85,
                    cursor: logo.link ? "pointer" : "default",
                }}
                loading="lazy"
            />
        );

        if (logo.link) {
            return (
                <Link key={`row-${rowIndex}-logo-${logoIndex}`} href={logo.link}>
                    {imgElement}
                </Link>
            );
        }

        return (
            <Box key={`row-${rowIndex}-logo-${logoIndex}`} style={{ pointerEvents: "none" }}>
                {imgElement}
            </Box>
        );
    };

    return (
        <Box
            position="relative"
            mx="auto"
            width="100%"
            py={8}
            bg="#f7f5f0"
            overflow="hidden"
        >
            {/* Top border */}
            <Box
                position="absolute"
                top="-1px"
                left="0"
                right="0"
                borderTopWidth="1px"
                borderColor="gray.200"
                pointerEvents="none"
            />

            {/* 4 rows of infinite sliders with alternating directions */}
            <VStack gap={4} width="100%">
                {rows.map((row, rowIndex) => (
                    <InfiniteSlider
                        key={rowIndex}
                        gap={48}
                        reverse={row.reverse}
                        speed={row.speed}
                    >
                        {row.logos.map((logo, logoIndex) => renderLogo(logo, rowIndex, logoIndex))}
                    </InfiniteSlider>
                ))}
            </VStack>

            {/* Progressive blur on edges */}
            <ProgressiveBlur direction="left" blurIntensity={1} />
            <ProgressiveBlur direction="right" blurIntensity={1} />

            {/* Bottom border */}
            <Box
                position="absolute"
                bottom="-1px"
                left="0"
                right="0"
                borderBottomWidth="1px"
                borderColor="gray.200"
                pointerEvents="none"
            />
        </Box>
    );
}
