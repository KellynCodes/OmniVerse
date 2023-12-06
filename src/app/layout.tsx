import "./globals.css";
import Footer from "../components/shared/Footer";
import { NavBar } from "../components/shared/Navbar";
import Image from "next/image";
import { gorditas, roboto_mono, poppins } from "@/config/font.config";
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
      url: "https://github.com/kendrichukwu",
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
        className={`${gorditas.variable} ${roboto_mono.variable} ${poppins.variable} ${poppins.className}`}
      >
        <Image src="/images/Frame.jpg" width={1440} height={38} alt="" />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
