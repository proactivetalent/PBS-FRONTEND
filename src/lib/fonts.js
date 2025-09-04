import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const gnuolane = localFont({
  src: [
    {
      path: "../../public/fonts/gnuolane.ttf",
      style: "normal",
    },
  ],
  variable: "--font-gnuolane",
  display: "swap",
});

export const conthrax = localFont({
  src: [
    {
      path: "../../public/fonts/conthrax.ttf",
      style: "normal",
    },
  ],
  variable: "--font-conthrax",
  display: "swap",
});

// Updated Poppins configuration for Next.js 15 compatibility
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});
