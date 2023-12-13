import Image from "next/image";
import Header from "../components/Header";
import Products from "../components/products/Products";
import Reviews from "../components/products/Reviews";
import { ReviewData } from "@/libs/data/products/product.review";
import { ProductsData } from "@/libs/data/products/products";

export default function Home() {
  return (
    <main>
      <Header />
      {/* LOGO SECTION */}
      <div className="bg-accent">
        <div className="clients flex justify-between gap-8 flex-wrap w-auto p-6">
          <Image
            className="client-img"
            src="/images/clients/versace.png"
            width={167}
            height={34}
            alt="VERCACE"
          />
          <Image
            className="client-img"
            src="/images/clients/zara-logo.png"
            width={92}
            height={38}
            alt="ZARA"
          />
          <Image
            className="client-img"
            src="/images/clients/gucci-logo.png"
            width={157}
            height={36}
            alt="GUCCI"
          />
          <Image
            className="client-img"
            src="/images/clients/prada-logo.png"
            width={195}
            height={32}
            alt="PRADA"
          />
          <Image
            className="client-img"
            src="/images/clients/calvin.png"
            width={208}
            height={34}
            alt="CALVIN"
          />
        </div>
      </div>
      <Products
        pageId="new-arrivals"
        pageTitle="Shop"
        productsData={ProductsData}
        buttonLabel="View All"
        buttonLink="/products"
      />
      <Products
        pageId="top-selling"
        pageTitle="Top Selling"
        productsData={ProductsData}
        buttonLabel="Load More"
        buttonLink="/#top-selling"
      />
      <Reviews
        ReviewData={ReviewData}
        pageTitle="OUR HAPPY CUSTOMERS"
        className="w-[97%] my-5 mx-auto border-[1.5px] border-border rounded-md py-8"
      />
    </main>
  );
}
