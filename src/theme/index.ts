import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Primary Corporate Buyings navy blue
        primary: {
          50: { value: "#e8eaf6" },
          100: { value: "#c5cae9" },
          200: { value: "#9fa8da" },
          300: { value: "#7986cb" },
          400: { value: "#5c6bc0" },
          500: { value: "#1a237e" }, // Main navy blue
          600: { value: "#283593" },
          700: { value: "#303f9f" },
          800: { value: "#1a237e" },
          900: { value: "#0d1442" },
        },
        // Accent coral red (for gradient)
        accent: {
          50: { value: "#fbe9e7" },
          100: { value: "#ffccbc" },
          200: { value: "#ffab91" },
          300: { value: "#ff8a65" },
          400: { value: "#ff7043" },
          500: { value: "#e65100" }, // Coral red
          600: { value: "#f4511e" },
          700: { value: "#e64a19" },
          800: { value: "#d84315" },
          900: { value: "#bf360c" },
        },
        // Secondary colors
        secondary: {
          50: { value: "#fff3e0" },
          100: { value: "#ffe0b2" },
          200: { value: "#ffcc80" },
          300: { value: "#ffb74d" },
          400: { value: "#ffa726" },
          500: { value: "#ff9800" }, // Orange accent
          600: { value: "#fb8c00" },
          700: { value: "#f57c00" },
          800: { value: "#ef6c00" },
          900: { value: "#e65100" },
        },
        // Gray scale for text and backgrounds
        gray: {
          50: { value: "#fafafa" },
          100: { value: "#f5f5f5" },
          200: { value: "#eeeeee" },
          300: { value: "#e0e0e0" },
          400: { value: "#bdbdbd" },
          500: { value: "#9e9e9e" },
          600: { value: "#757575" },
          700: { value: "#616161" },
          800: { value: "#424242" },
          900: { value: "#212121" },
        },
      },
      fonts: {
        heading: { value: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
        body: { value: "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
      },
      fontSizes: {
        xs: { value: "0.75rem" },    // 12px
        sm: { value: "0.875rem" },   // 14px
        md: { value: "1rem" },       // 16px
        lg: { value: "1.125rem" },   // 18px
        xl: { value: "1.25rem" },    // 20px
        "2xl": { value: "1.5rem" },  // 24px
        "3xl": { value: "1.875rem" },// 30px
        "4xl": { value: "2.25rem" }, // 36px
      },
      spacing: {
        px: { value: "1px" },
        0: { value: "0" },
        1: { value: "0.25rem" },   // 4px
        2: { value: "0.5rem" },    // 8px
        3: { value: "0.75rem" },   // 12px
        4: { value: "1rem" },      // 16px
        5: { value: "1.25rem" },   // 20px
        6: { value: "1.5rem" },    // 24px
        8: { value: "2rem" },      // 32px
        10: { value: "2.5rem" },   // 40px
        12: { value: "3rem" },     // 48px
        16: { value: "4rem" },     // 64px
        20: { value: "5rem" },     // 80px
      },
      radii: {
        none: { value: "0" },
        sm: { value: "0.25rem" },   // 4px
        md: { value: "0.5rem" },    // 8px
        lg: { value: "0.75rem" },   // 12px
        xl: { value: "1rem" },      // 16px
        "2xl": { value: "1.5rem" }, // 24px
        full: { value: "9999px" },
      },
    },
    semanticTokens: {
      colors: {
        // Brand colors
        "brand.primary": { value: "{colors.primary.500}" },
        "brand.accent": { value: "{colors.accent.500}" },
        "brand.secondary": { value: "{colors.secondary.500}" },
        // Background colors
        "bg.default": { value: "#ffffff" },
        "bg.subtle": { value: "{colors.gray.50}" },
        "bg.muted": { value: "{colors.gray.100}" },
        // Text colors
        "text.default": { value: "{colors.gray.900}" },
        "text.muted": { value: "{colors.gray.600}" },
        "text.subtle": { value: "{colors.gray.500}" },
        // Border colors
        "border.default": { value: "{colors.gray.200}" },
        "border.muted": { value: "{colors.gray.300}" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
