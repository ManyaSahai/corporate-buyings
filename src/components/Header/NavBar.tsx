"use client";

import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NavItem } from "@/types";
import { MegaMenu } from "./MegaMenu";
import { BG_COLOR } from "@/lib/colors";

// Navigation items with comprehensive mega menu data
const navItems: (NavItem & { imageSrc: string })[] = [
  {
    id: "amcs",
    label: "AMCs",
    href: "/amcs",
    imageSrc: "/img/all.jpg",
    megaMenu: {
      categories: [
        {
          title: "Maintenance Services",
          items: [
            { label: "HVAC Maintenance", href: "/products?category=hvac" },
            {
              label: "Electrical Maintenance",
              href: "/products?category=electrical-maintenance",
            },
            {
              label: "Plumbing Maintenance",
              href: "/products?category=plumbing-maintenance",
            },
          ],
        },
      ],
    },
  },
  {
    id: "7",
    label: "Corporate Gifts",
    href: "/products?category=corporate-gifts",
    imageSrc: "/img/cleaning.jpg",
    megaMenu: {
      categories: [
        {
          title: "Awards & Recognition",
          items: [
            { label: "Medals", href: "/products?category=medals" },
            { label: "Momentoes", href: "/products?category=momentoes" },
            { label: "Trophies", href: "/products?category=trophies" },
          ],
        },
        {
          title: "Bags",
          items: [
            { label: "Backpacks", href: "/products?category=backpacks" },
            { label: "Laptop Bags", href: "/products?category=laptop-bags" },
            { label: "Trolley Bags", href: "/products?category=trolley-bags" },
            { label: "Jute Bags", href: "/products?category=jute-bags" },
          ],
        },
        {
          title: "Drinkware",
          items: [
            { label: "Ceramic Mugs", href: "/products?category=ceramic-mugs" },
            {
              label: "Copper Bottles",
              href: "/products?category=copper-bottles",
            },
            {
              label: "Steel Bottles",
              href: "/products?category=steel-bottles",
            },
            { label: "Sippers", href: "/products?category=sippers" },
          ],
        },
        {
          title: "Gadgets & Apparel",
          items: [
            { label: "Powerbanks", href: "/products?category=powerbanks" },
            { label: "Smartwatches", href: "/products?category=smartwatches" },
            { label: "T-shirts", href: "/products?category=tshirts" },
            { label: "Jackets", href: "/products?category=jackets" },
          ],
        },
      ],
    },
  },
  {
    id: "5",
    label: "Electrical, Plumbing & Appliances",
    href: "/products?category=electrical",
    imageSrc: "/img/electrical.avif",
    megaMenu: {
      categories: [
        {
          title: "Fans",
          items: [
            { label: "Ceiling Fans", href: "/products?category=ceiling-fans" },
            { label: "Exhaust Fans", href: "/products?category=exhaust-fans" },
            {
              label: "Pedestal Fans",
              href: "/products?category=pedestal-fans",
            },
            { label: "Table Fans", href: "/products?category=table-fans" },
            { label: "Wall Fans", href: "/products?category=wall-fans" },
          ],
        },
        {
          title: "Inverter & UPS",
          items: [
            { label: "Batteries", href: "/products?category=batteries" },
            { label: "Inverters", href: "/products?category=inverters" },
            { label: "Stabilizers", href: "/products?category=stabilizers" },
            { label: "UPS", href: "/products?category=ups" },
          ],
        },
        {
          title: "Lighting",
          items: [
            {
              label: "LED Downlights",
              href: "/products?category=led-downlights",
            },
            {
              label: "LED Flood Lights",
              href: "/products?category=led-flood-lights",
            },
            {
              label: "LED Panel Lights",
              href: "/products?category=led-panel-lights",
            },
            {
              label: "LED Street Lights",
              href: "/products?category=led-street-lights",
            },
          ],
        },
        {
          title: "Wires & Cables",
          items: [
            {
              label: "Single-Core Wire",
              href: "/products?category=single-core-wire",
            },
            {
              label: "Multi-Core Wire",
              href: "/products?category=multi-core-wire",
            },
            {
              label: "HT Power Cable",
              href: "/products?category=ht-power-cable",
            },
            {
              label: "LT Power Cable",
              href: "/products?category=lt-power-cable",
            },
          ],
        },
      ],
    },
  },
  {
    id: "4",
    label: "Industrial Safety",
    href: "/products?category=safety",
    imageSrc: "/img/safety.webp",
    megaMenu: {
      categories: [
        {
          title: "Head Protection",
          items: [
            {
              label: "Safety Helmets",
              href: "/products?category=safety-helmets",
            },
            { label: "Hard Hats", href: "/products?category=hard-hats" },
            { label: "Bump Caps", href: "/products?category=bump-caps" },
          ],
        },
        {
          title: "Body Protection",
          items: [
            { label: "Safety Vests", href: "/products?category=safety-vests" },
            { label: "Coveralls", href: "/products?category=coveralls" },
            { label: "Aprons", href: "/products?category=aprons" },
          ],
        },
        {
          title: "Hand & Foot Protection",
          items: [
            { label: "Work Gloves", href: "/products?category=work-gloves" },
            {
              label: "Cut Resistant Gloves",
              href: "/products?category=cut-resistant-gloves",
            },
            { label: "Safety Shoes", href: "/products?category=safety-shoes" },
          ],
        },
        {
          title: "Fire Safety",
          items: [
            {
              label: "ABC Type Extinguisher",
              href: "/products?category=abc-extinguisher",
            },
            {
              label: "CO2 Type Extinguisher",
              href: "/products?category=co2-extinguisher",
            },
            {
              label: "Clean Agent Type",
              href: "/products?category=clean-agent-extinguisher",
            },
          ],
        },
      ],
    },
  },
  {
    id: "6",
    label: "IT Supplies",
    href: "/products?category=it-hardware",
    imageSrc: "/img/hardware.jpg",
    megaMenu: {
      categories: [
        {
          title: "End-User Devices",
          items: [
            { label: "Desktops", href: "/products?category=desktops" },
            { label: "Laptops", href: "/products?category=laptops" },
            { label: "Monitors", href: "/products?category=monitors" },
            { label: "Tablets", href: "/products?category=tablets" },
          ],
        },
        {
          title: "Audio-Visual (AV)",
          items: [
            {
              label: "Interactive Flat Panels",
              href: "/products?category=interactive-panels",
            },
            { label: "Projectors", href: "/products?category=projectors" },
            {
              label: "LED/LCD Screens",
              href: "/products?category=led-lcd-screens",
            },
            { label: "Video Walls", href: "/products?category=video-walls" },
          ],
        },
        {
          title: "Peripherals",
          items: [
            {
              label: "Keyboards & Mouse",
              href: "/products?category=keyboards-mouse",
            },
            { label: "Printers", href: "/products?category=printers" },
            { label: "Scanners", href: "/products?category=scanners" },
            {
              label: "Webcams & Headsets",
              href: "/products?category=webcams-headsets",
            },
          ],
        },
        {
          title: "Network & Security",
          items: [
            { label: "CCTV", href: "/products?category=cctv" },
            {
              label: "Access Control",
              href: "/products?category=access-control",
            },
            { label: "Switches", href: "/products?category=switches" },
            { label: "Servers", href: "/products?category=servers" },
          ],
        },
      ],
    },
  },
  {
    id: "material-handling",
    label: "Material Handling & Packings",
    href: "/products?category=material-handling",
    imageSrc: "/img/all.jpg",
    megaMenu: {
      categories: [
        {
          title: "Packing Material",
          items: [
            { label: "Corrugated Boxes", href: "/products?category=boxes" },
            { label: "Tapes", href: "/products?category=tapes" },
            { label: "Stretch Film", href: "/products?category=stretch-film" },
          ],
        },
        {
          title: "Handling Equipment",
          items: [
            { label: "Pallets", href: "/products?category=pallets" },
            { label: "Trolleys", href: "/products?category=trolleys" },
          ],
        },
      ],
    },
  },
  {
    id: "8",
    label: "Office Supplies",
    href: "/products?category=office",
    imageSrc: "/img/all.jpg",
    megaMenu: {
      categories: [
        {
          title: "Office Furniture",
          items: [
            { label: "Chairs", href: "/products?category=chairs" },
            { label: "Tables", href: "/products?category=tables" },
            { label: "Sofas", href: "/products?category=sofas" },
            {
              label: "Storage Cabinets",
              href: "/products?category=storage-cabinets",
            },
            { label: "Bookshelves", href: "/products?category=bookshelves" },
          ],
        },
        {
          title: "Stationery",
          items: [
            {
              label: "Files & Folders",
              href: "/products?category=files-folders",
            },
            {
              label: "Pens & Pencils",
              href: "/products?category=pens-pencils",
            },
            { label: "Sticky Notes", href: "/products?category=sticky-notes" },
            { label: "Binder Clips", href: "/products?category=binder-clips" },
          ],
        },
        {
          title: "Pantry",
          items: [
            { label: "Tea & Coffee", href: "/products?category=tea-coffee" },
            { label: "Disposables", href: "/products?category=disposables" },
            {
              label: "Water Dispensers",
              href: "/products?category=water-dispensers",
            },
            {
              label: "Coffee Machines",
              href: "/products?category=coffee-machines",
            },
          ],
        },
        {
          title: "Housekeeping",
          items: [
            {
              label: "Cleaning Supplies",
              href: "/products?category=cleaning-supplies",
            },
            { label: "Dustbins", href: "/products?category=dustbins" },
            {
              label: "Air Fresheners",
              href: "/products?category=air-fresheners",
            },
            {
              label: "Tissue Papers",
              href: "/products?category=tissue-papers",
            },
          ],
        },
      ],
    },
  },
];

export function NavBar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <Box
      bg="transparent"
      borderBottom="1px solid"
      borderColor="gray.200"
      position="relative"
      zIndex={99}
      h="70px"
    >
      <Flex
        maxW="1400px"
        mx="auto"
        px={4}
        align="stretch"
        justify="space-between"
        gap={4}
        h="100%"
      >
        {navItems.map((item, index) => {
          // Determine alignment based on position
          // First 3 items (AMCs, Corporate Gifts, Electrical) - left
          // Last 2 items (Material Handling, Office Supplies) - right
          // Middle items (Industrial Safety, IT Supplies) - center
          const getAlignment = (): "left" | "center" | "right" => {
            if (index <= 2) return "left";
            if (index >= navItems.length - 2) return "right";
            return "center";
          };

          return (
          <Box
            key={item.id}
            onMouseEnter={() => item.megaMenu && setActiveMenu(item.id)}
            onMouseLeave={() => setActiveMenu(null)}
            flexShrink={0}
            display="flex"
            alignItems="center"
            position="relative"
          >
            <Flex
              direction="column"
              align="center"
              justify="center"
              gap={0}
              px={3}
              py={1}
              h="100%"
              position="relative"
              cursor="pointer"
              color="gray.700"
              transition="all 0.2s"
              _hover={{
                color: "#E84A3D",
                _after: {
                  transform: "scaleX(1)",
                },
              }}
              _after={{
                content: '""',
                position: "absolute",
                bottom: "-1px",
                left: 0,
                right: 0,
                height: "3px",
                bg: "linear-gradient(90deg, #2A348C 0%, #E84A3D 100%)",
                transform: activeMenu === item.id ? "scaleX(1)" : "scaleX(0)",
                transition: "transform 0.2s",
                transformOrigin: "center",
                zIndex: 10,
              }}
            >
              <Image
                src={item.imageSrc}
                alt={item.label}
                boxSize="24px"
                objectFit="contain"
                mb={0.5}
                borderRadius="md"
              />

              <Flex align="center" gap={1}>
                <Text
                  fontSize="12px"
                  fontWeight="500"
                  textAlign="center"
                  lineHeight="1.2"
                  whiteSpace="nowrap"
                >
                  {item.label}
                </Text>

                {item.megaMenu && (
                  <Box color="gray.400">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </Box>
                )}
              </Flex>
            </Flex>

            {/* MegaMenu */}
            <AnimatePresence>
              {item.megaMenu && activeMenu === item.id && (
                <MegaMenu data={item.megaMenu} alignment={getAlignment()} />
              )}
            </AnimatePresence>
          </Box>
          );
        })}
      </Flex>
    </Box>
  );
}
