import type { Metadata } from "next";
import { Providers } from "./providers";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Preloader } from "@/components/Preloader";

export const metadata: Metadata = {
  title: "CorporateBuyings - Office & Industrial Supplies",
  description: "B2B Office Supplies & Industrial Equipment E-commerce Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          {children}
          <WhatsAppButton />
          <Preloader />
        </Providers>
      </body>
    </html>
  );
}
