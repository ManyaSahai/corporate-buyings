import { Box } from "@chakra-ui/react";

export default function BackgroundDecor() {
  return (
    <>
      {/* Big gradient blobs */}
      <Box
        position="absolute"
        top="-150px"
        right="-150px"
        w="500px"
        h="500px"
        bg="linear-gradient(135deg, #e0f2fe, #dbeafe)"
        borderRadius="50%"
        filter="blur(80px)"
        opacity={0.7}
        zIndex={0}
      />

      <Box
        position="absolute"
        bottom="-200px"
        right="-150px"
        w="600px"
        h="600px"
        bg="linear-gradient(135deg, #fff7ed, #fde68a)"
        borderRadius="50%"
        filter="blur(100px)"
        opacity={0.6}
        zIndex={0}
      />

      {/* Floating soft shapes */}
      <Box
        position="absolute"
        top="15%"
        left="8%"
        w="40px"
        h="40px"
        bg="#dbeafe"
        borderRadius="lg"
        opacity={0.5}
        animation="float 8s ease-in-out infinite"
      />

      <Box
        position="absolute"
        top="60%"
        left="5%"
        w="24px"
        h="24px"
        bg="#fde68a"
        borderRadius="full"
        opacity={0.6}
        animation="float 10s ease-in-out infinite"
      />

      <Box
        position="absolute"
        top="30%"
        right="10%"
        w="50px"
        h="50px"
        bg="#e0f2fe"
        borderRadius="xl"
        opacity={0.5}
        animation="float 12s ease-in-out infinite"
      />

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </>
  );
}
