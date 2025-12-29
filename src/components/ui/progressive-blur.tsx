"use client";

import React from "react";
import { Box } from "@chakra-ui/react";

interface ProgressiveBlurProps {
    direction?: "left" | "right" | "top" | "bottom";
    blurIntensity?: number;
    className?: string;
}

export function ProgressiveBlur({
    direction = "left",
    blurIntensity = 1,
}: ProgressiveBlurProps) {
    const gradientDirection = {
        left: "to right",
        right: "to left",
        top: "to bottom",
        bottom: "to top",
    }[direction];

    return (
        <Box
            position="absolute"
            top={direction === "bottom" ? "auto" : 0}
            bottom={direction === "top" ? "auto" : 0}
            left={direction === "right" ? "auto" : 0}
            right={direction === "left" ? "auto" : 0}
            width={direction === "left" || direction === "right" ? "160px" : "100%"}
            height={direction === "top" || direction === "bottom" ? "160px" : "100%"}
            pointerEvents="none"
            bgGradient={`linear(${gradientDirection}, white, transparent)`}
            filter={`blur(${blurIntensity}px)`}
            zIndex={1}
        />
    );
}
