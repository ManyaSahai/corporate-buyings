"use client";

import dynamic from "next/dynamic";

// Import popup safely (no SSR)
const PopupModal = dynamic(() => import("@/components/modals/PopupModal"), {
  ssr: false,
});

export default function ClientHome() {
  return <PopupModal />;
}
