import { Suspense } from "react";
import ProductsPageClient from "./ProductsPageClient";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { BG_COLOR } from "@/lib/colors";

// Loading component for Suspense fallback
function ProductsLoading() {
  return (
    <Box minH="100vh" bg={BG_COLOR}>
      <Header />
      <Flex
        h="400px"
        align="center"
        justify="center"
        direction="column"
        gap={4}
      >
        <Box
          w="50px"
          h="50px"
          borderRadius="full"
          border="4px solid"
          borderColor="blue.500"
          borderTopColor="transparent"
          animation="spin 1s linear infinite"
          css={{
            "@keyframes spin": {
              "0%": { transform: "rotate(0deg)" },
              "100%": { transform: "rotate(360deg)" },
            },
          }}
        />
        <Text color="gray.600" fontSize="lg">
          Loading products...
        </Text>
      </Flex>
    </Box>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductsPageClient />
    </Suspense>
  );
}
