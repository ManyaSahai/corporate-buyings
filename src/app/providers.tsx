"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { system } from "@/theme";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ChakraProvider value={system}>
      {children}
    </ChakraProvider>
  );
}
