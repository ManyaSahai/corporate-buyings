import { BannerSlide, SideCard, Banner } from "@/types";

// Hero carousel slides
export const heroSlides: BannerSlide[] = [
  {
    id: "hero-1",
    imageUrl: "/one.jpg",
    altText: "Corporate Buyings - Your One Stop Shop",
    link: "/",
  },
  {
    id: "hero-2",
    imageUrl: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&h=400&fit=crop",
    altText: "Premium Office Equipment - Best Quality",
    link: "/office-equipment",
  },
  {
    id: "hero-3",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=400&fit=crop",
    altText: "AV Equipment - Transform Your Workspace",
    link: "/av-equipment",
  },
  {
    id: "hero-4",
    imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=400&fit=crop",
    altText: "Lighting Solutions - Best Prices",
    link: "/lighting",
  },
];

// Side promotional cards - removed for cleaner layout
export const sideCards: SideCard[] = [];

// Promotional banners for various sections
export const promoBanners: Banner[] = [
  {
    id: "promo-1",
    type: "promo",
    imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&h=200&fit=crop",
    altText: "Free Shipping on Orders Above Rs.5000",
    link: "/shipping-offer",
    position: 1,
    section: "after-categories",
  },
  {
    id: "promo-2",
    type: "promo",
    imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1400&h=200&fit=crop",
    altText: "Bulk Order Discounts",
    link: "/bulk-orders",
    position: 2,
    section: "after-products",
  },
  {
    id: "promo-3",
    type: "promo",
    imageUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=680&h=200&fit=crop",
    altText: "Top Brands",
    link: "/brands",
    position: 3,
    section: "brands-section",
    width: "50%",
  },
  {
    id: "promo-4",
    type: "promo",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=680&h=200&fit=crop",
    altText: "Quality Assured Products",
    link: "/quality",
    position: 4,
    section: "brands-section",
    width: "50%",
  },
];
