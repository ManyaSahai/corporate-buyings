"use client";

import React, { useId } from "react";
import { Box } from "@chakra-ui/react";

interface InfiniteSliderProps {
    children: React.ReactNode;
    gap?: number;
    speed?: number;
    reverse?: boolean;
}

export function InfiniteSlider({
    children,
    gap = 16,
    speed = 40,
    reverse = false,
}: InfiniteSliderProps) {
    const childArray = React.Children.toArray(children);
    const uniqueId = useId().replace(/:/g, "");

    // Duration: lower speed value = faster animation
    const duration = 30 * (40 / speed);

    const animationName = reverse ? `scroll-right-${uniqueId}` : `scroll-left-${uniqueId}`;
    const trackClass = `infinite-slider-track-${uniqueId}`;

    return (
        <>
            <style>{`
        @keyframes scroll-left-${uniqueId} {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - ${gap / 2}px)); }
        }
        @keyframes scroll-right-${uniqueId} {
          from { transform: translateX(calc(-50% - ${gap / 2}px)); }
          to { transform: translateX(0); }
        }
        .${trackClass} {
          animation: ${animationName} ${duration}s linear infinite;
        }
        .${trackClass}:hover {
          animation-play-state: paused;
        }
      `}</style>
            <Box overflow="hidden" width="100%">
                <div
                    className={trackClass}
                    style={{
                        display: "inline-flex",
                        gap: `${gap}px`,
                    }}
                >
                    {/* Render items 4 times to ensure there's always enough content visible */}
                    {[...childArray, ...childArray, ...childArray, ...childArray].map((child, index) => (
                        <div key={index} style={{ flexShrink: 0 }}>
                            {child}
                        </div>
                    ))}
                </div>
            </Box>
        </>
    );
}
