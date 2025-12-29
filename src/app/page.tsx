import { Box, Text } from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { CategorySection } from "@/components/CategorySection";
import { ProductSection } from "@/components/ProductSection";
import { Footer7 } from "@/components/ui/footer-7";
import { LogoCloud } from "@/components/ui/logo-cloud-4";
import Testimonials from "@/components/Testimonials/Testimonials";

import ClientHome from "./ClientHome";
import BackgroundDecor from "@/components/BackgroundDecor";
import { BG_GRADIENT_MESH } from "@/lib/colors";

// Data imports
import { heroSlides, sideCards } from "@/data/banners";
import { categorySections } from "@/data/categories";
import { productSections } from "@/data/products";

export default function Home() {
  return (
    <Box
      minHeight="100vh"
      bg={BG_GRADIENT_MESH}
      position="relative"
      overflow="hidden"
    >
      {/* 🔹 BACKGROUND LAYER */}
      <BackgroundDecor />
      {/* Background decoration removed - was zigzag lines */}

      {/* 🔹 FOREGROUND LAYER */}
      <Box position="relative" zIndex={1}>
        <ClientHome />

        {/* Header */}
        <Header isSticky />

        {/* Main Content */}
        <Box
          as="main"
          position="relative"
          backgroundImage="
    radial-gradient(circle at 1px 1px, rgba(37,99,235,0.08) 1px, transparent 0),
    radial-gradient(circle at 40px 40px, rgba(245,158,11,0.08) 1px, transparent 0)
  "
          backgroundSize="80px 80px"
        >
          <HeroBanner
            slides={heroSlides}
            sideCards={sideCards}
            autoPlayInterval={5000}
          />

          <CategorySection
            title={categorySections[0].title}
            categories={categorySections[0].categories}
            layout={categorySections[0].layout}
            columns={categorySections[0].columns}
          />

          <ProductSection
            title={productSections.dealOfTheDay.title}
            products={productSections.dealOfTheDay.products}
            layout={productSections.dealOfTheDay.layout}
            showViewAll={productSections.dealOfTheDay.showViewAll}
          />

          <CategorySection
            title={categorySections[1].title}
            categories={categorySections[1].categories}
            layout={categorySections[1].layout}
          />

          <ProductSection
            title={productSections.featured.title}
            products={productSections.featured.products}
            layout={productSections.featured.layout}
            showViewAll={productSections.featured.showViewAll}
          />

          <CategorySection
            title={categorySections[2].title}
            categories={categorySections[2].categories}
            layout={categorySections[2].layout}
            columns={categorySections[2].columns}
          />

          <ProductSection
            title={productSections.bestSellers.title}
            products={productSections.bestSellers.products}
            layout={productSections.bestSellers.layout}
            showViewAll={productSections.bestSellers.showViewAll}
          />

          <ProductSection
            title={productSections.newArrivals.title}
            products={productSections.newArrivals.products}
            layout={productSections.newArrivals.layout}
            showViewAll={productSections.newArrivals.showViewAll}
          />

          <Text
            fontSize="3xl"
            fontWeight="bold"
            textAlign="center"
            mb={8}
            mt={12}
          >
            Our Brands Section
          </Text>
          <LogoCloud
            logos={[
              { src: "/brands/1.png", alt: "Brand 1" },
              { src: "/brands/2.png", alt: "Brand 2" },
              { src: "/brands/3.png", alt: "Brand 3" },
              { src: "/brands/4.png", alt: "Brand 4" },
              { src: "/brands/5.png", alt: "Brand 5" },
              { src: "/brands/6.png", alt: "Brand 6" },
              { src: "/brands/7.png", alt: "Brand 7" },
              { src: "/brands/8.png", alt: "Brand 8" },
              { src: "/brands/9.png", alt: "Brand 9" },
              { src: "/brands/10.png", alt: "Brand 10" },
            ]}
          />

          <Testimonials />

          <Footer7 />
        </Box>
      </Box>
    </Box>
  );
}
