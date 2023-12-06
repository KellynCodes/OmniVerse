import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Gorditas, Roboto_Mono } from "next/font/google";

export const gorditas: NextFontWithVariable = Gorditas({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gorditas",
});

export const roboto_mono: NextFontWithVariable = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});
