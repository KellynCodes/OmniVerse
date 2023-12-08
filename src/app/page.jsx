import Image from "next/image";
import Header from "../components/Header";
import Products from "../components/products/Products";
import Reviews from "../components/products/Reviews";
import TopSelling from "../components/products/TopSelling";

export default function Home() {
  return (
    <main>
      <Header />
      {/* LOGO SECTION */}
      <div className="bg-accent">
        <div className="flex justify-between gap-8 flex-wrap w-auto p-6">
          <Image src="/images/versace.png" width={167} height={34} alt="" />
          <Image src="/images/zara-logo.png" width={92} height={38} alt="" />
          <Image src="/images/gucci-logo.png" width={157} height={36} alt="" />
          <Image src="/images/prada-logo.png" width={195} height={32} alt="" />
          <Image src="/images/calvin.png" width={208} height={34} alt="" />
        </div>
      </div>
      <Products />
      <TopSelling />
      <Reviews />
    </main>
  );
}
