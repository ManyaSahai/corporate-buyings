import { Category } from "@/types";

// Top Categories Section - AV & Lighting
export const topCategories: Category[] = [
  {
    id: "cat-1",
    name: "Ceiling Fans",
    slug: "ceiling-fans",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&h=200&fit=crop",

    order: 1,
    link: "/category/ceiling-fans",
  },
  {
    id: "cat-2",
    name: "LED Downlights",
    slug: "led-downlights",
    imageUrl: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=200&h=200&fit=crop",

    order: 2,
    link: "/category/led-downlights",
  },
  {
    id: "cat-3",
    name: "Exhaust Fans",
    slug: "exhaust-fans",
    imageUrl: "https://picsum.photos/seed/exhaustfan/200/200",

    order: 3,
    link: "/category/exhaust-fans",
  },
  {
    id: "cat-4",
    name: "LED Flood Lights",
    slug: "led-flood-lights",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop",
    order: 4,
    link: "/category/led-flood-lights",
  },
  {
    id: "cat-5",
    name: "Table Fans",
    slug: "table-fans",
    imageUrl: "https://picsum.photos/seed/tablefan/200/200",

    order: 5,
    link: "/category/table-fans",
  },
  {
    id: "cat-6",
    name: "LED Panel Lights",
    slug: "led-panel-lights",
    imageUrl: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=200&h=200&fit=crop",
    order: 6,
    link: "/category/led-panel-lights",
  },
];

// Audio-Visual Equipment Section
export const avEquipment: Category[] = [
  {
    id: "av-1",
    name: "Projectors",
    slug: "projectors",
    imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=200&h=200&fit=crop",

    order: 1,
    link: "/category/projectors",
  },
  {
    id: "av-2",
    name: "Projector Screens",
    slug: "projector-screens",
    imageUrl: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=200&h=200&fit=crop",
    order: 2,
    link: "/category/projector-screens",
  },
  {
    id: "av-3",
    name: "LED/LCD/OLED Screens",
    slug: "led-lcd-oled-screens",
    imageUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&h=200&fit=crop",

    order: 3,
    link: "/category/led-lcd-oled-screens",
  },
  {
    id: "av-4",
    name: "Speakers",
    slug: "speakers",
    imageUrl: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=200&h=200&fit=crop",
    order: 4,
    link: "/category/speakers",
  },
  {
    id: "av-5",
    name: "Video Conferencing",
    slug: "video-conferencing",
    imageUrl: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=200&h=200&fit=crop",

    order: 5,
    link: "/category/video-conferencing",
  },
  {
    id: "av-6",
    name: "Cameras",
    slug: "cameras",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&h=200&fit=crop",
    order: 6,
    link: "/category/cameras",
  },
  {
    id: "av-7",
    name: "Video Walls",
    slug: "video-walls",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&h=200&fit=crop",
    order: 7,
    link: "/category/video-walls",
  },
  {
    id: "av-8",
    name: "Touch Controllers",
    slug: "touch-controllers",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=200&fit=crop",

    order: 8,
    link: "/category/touch-controllers",
  },
];

// Fans & Ventilation Section
export const fansVentilation: Category[] = [
  {
    id: "fan-1",
    name: "Pedestal Fans",
    slug: "pedestal-fans",
    imageUrl: "https://images.unsplash.com/photo-1617375407633-acd67aba7864?w=200&h=200&fit=crop",
    order: 1,
    link: "/category/pedestal-fans",
  },
  {
    id: "fan-2",
    name: "Wall Fans",
    slug: "wall-fans",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&h=200&fit=crop",

    order: 2,
    link: "/category/wall-fans",
  },
  {
    id: "fan-3",
    name: "LED Spot Lights",
    slug: "led-spot-lights",
    imageUrl: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=200&h=200&fit=crop",
    order: 3,
    link: "/category/led-spot-lights",
  },
  {
    id: "fan-4",
    name: "LED Street Lights",
    slug: "led-street-lights",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop",

    order: 4,
    link: "/category/led-street-lights",
  },
  {
    id: "fan-5",
    name: "Lighting",
    slug: "lighting",
    imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=200&h=200&fit=crop",
    order: 5,
    link: "/category/lighting",
  },
  {
    id: "fan-6",
    name: "Industrial Fans",
    slug: "industrial-fans",
    imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=200&h=200&fit=crop",
    order: 6,
    link: "/category/industrial-fans",
  },
];

// All category sections for easy import
export const categorySections = [
  {
    id: "top-categories",
    title: "Top Categories",
    categories: topCategories,
    layout: "grid" as const,
    columns: 6,
  },
  {
    id: "av-equipment",
    title: "Audio-Visual Equipment",
    categories: avEquipment,
    layout: "scroll" as const,
  },
  {
    id: "fans-ventilation",
    title: "Fans & Ventilation",
    categories: fansVentilation,
    layout: "grid" as const,
    columns: 6,
  },
];
