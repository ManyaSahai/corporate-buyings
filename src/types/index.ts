// Navigation Types
export interface NavItem {
  id: string;
  label: string;
  href: string;
  megaMenu?: MegaMenuData;
}

export interface MegaMenuData {
  categories: MegaMenuCategory[];
  featuredImage?: string;
}

export interface MegaMenuCategory {
  title: string;
  image?: string;
  items: { label: string; href: string }[];
}

// Banner Types
export interface BannerSlide {
  id: string;
  imageUrl: string;
  altText: string;
  link?: string;
}

export interface SideCard {
  id: string;
  imageUrl: string;
  title: string;
  link?: string;
}

export interface Banner {
  id: string;
  type: "hero" | "promo" | "side";
  imageUrl: string;
  altText: string;
  link?: string;
  position: number;
  section: string;
  width?: string;
}

// Category Types
export interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  discount?: string;
  parentId?: string;
  order: number;
  link: string;
}

// Product Types
export interface Product {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  originalPrice: number;
  discountedPrice?: number;
  discountPercent?: number;
  brand: string;
  category: string;
  rating?: number;
  reviewCount?: number;
  inStock: boolean;
}

// Brand Types
export interface Brand {
  id: string;
  name: string;
  logoUrl: string;
  link: string;
}

// Footer Types
export interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  id: string;
  name: string;
  icon: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface FooterData {
  sections: FooterSection[];
  socialLinks: SocialLink[];
  paymentMethods: string[];
  contactInfo: ContactInfo;
}

// Component Props Types
export interface HeroBannerProps {
  slides: BannerSlide[];
  sideCards: SideCard[];
  autoPlayInterval?: number;
}

export interface CategorySectionProps {
  title: string;
  categories: Category[];
  layout: "grid" | "scroll";
  columns?: number;
}

export interface ProductSectionProps {
  title: string;
  products: Product[];
  layout: "grid" | "carousel";
  showViewAll?: boolean;
}

export interface PromoBannerProps {
  banners: Banner[];
  layout: "single" | "grid" | "row";
}

export interface BrandShowcaseProps {
  title: string;
  brands: Brand[];
  layout: "grid" | "carousel";
}

export interface FooterProps {
  sections: FooterSection[];
  socialLinks: SocialLink[];
  paymentMethods: string[];
  contactInfo: ContactInfo;
}
