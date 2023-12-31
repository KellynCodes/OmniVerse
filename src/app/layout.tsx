import "./globals.css";
import Footer from "../components/shared/Footer";
import { NavBar } from "../components/shared/Navbar";
// @ts-ignore
import Image from "next/image";
import { gorditas, roboto_mono, poppins } from "@/config/font.config";
// @ts-ignore
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OmniVerse",
  description: "Web 5 Shopping Cart",
  authors: [
    {
      name: "Kelechi Amos",
      url: "https://github.com/kellyncodes",
    },
    {
      name: "Becky",
      url: "https://github.com/beckyyCodes",
    },
    {
      name: "Kendrick",
      url: "https://github.com/kendrichibueze",
    },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${gorditas.variable} ${roboto_mono.variable} ${poppins.variable} ${poppins.className}`}
      >
        <Image
          className="min-w-[100vw] min-h-[2.3rem]"
          src="/images/Frame.jpg"
          width={1440}
          height={38}
          alt=""
        />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
