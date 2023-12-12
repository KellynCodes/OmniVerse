import React from "react";
import Image from "next/image";

const Footer = (): React.JSX.Element => {
  return (
    <footer className="relative">
      <div className="bg-accent absolute z-[99] text-[#f0f0f0] p-5 w-[80vw] top-[-15%] md:top-[-17%] left-[4%] right-[4%] my-0 mx-auto rounded-xl gap-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-3">
          <div className="w-full md:w-[48%]">
            <h1 className="font-bold text-center md:text-left text-xl lg:text-3xl leading-10 lg:leading-[4rem]">
              STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
            </h1>
          </div>
          <form action="flex flex-col gap-3 w-full md:w-[48%]">
            <div className="flex items-center gap-6 w-full bg-white rounded-[30px] py-3 px-4">
              <Image
                src="/images/icons/email.png"
                width={28}
                height={28}
                alt=""
              />
              <input
                className="bg-white border-none outline-0 text-accent w-[95%]"
                type="text"
                name="search"
                placeholder="Enter your email address"
              />
            </div>
            <button
              className="text-center text-accent-light w-full bg-white rounded-[30px] py-3 px-4 mt-3"
              type="button"
            >
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-accent-white justify-start gap-8 pt-[8rem] pb-[5rem] mt-[10rem] px-8">
        <div className="flex flex-col w-[100%] md:w-[15rem] md:px-3">
          <p className="text-[1rem] text-gray-400">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="w-[17.5rem] flex  justify-evenly items-center my-6 -ml-6">
            <Image src="/images/icons/1.png" width={28} height={28} alt="" />
            <Image src="/images/icons/2.png" width={28} height={28} alt="" />
            <Image src="/images/icons/3.png" width={28} height={28} alt="" />
            <Image src="/images/icons/4.png" width={28} height={28} alt="" />
          </div>
        </div>
        <div className="footer-details">
          <h2 className="font-bold tracking-widest leading-5 uppercase color-[#999999]">
            Company
          </h2>
          <ul>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Works</a>
            </li>
            <li>
              <a>Center</a>
            </li>
          </ul>
        </div>
        <div className="footer-details flex flex-col">
          <h2 className="font-bold tracking-widest leading-5 uppercase color-[#999999]">
            Help
          </h2>
          <ul>
            <li>
              <a>customer support</a>
            </li>
            <li>
              <a>delivery details</a>
            </li>
            <li>
              <a>terms and condition</a>
            </li>
            <li>
              <a>privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-details">
          <h2 className="font-bold tracking-widest leading-5 uppercase color-[#999999]">
            FAQ
          </h2>
          <ul>
            <li>
              <a>account</a>
            </li>
            <li>
              <a>manage deliveries</a>
            </li>
            <li>
              <a>orders</a>
            </li>
            <li>
              <a>payment</a>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <p className="text-[#999999] text-[1rem] p-6">
        OmniVerse © 2000-{new Date().getFullYear()}, All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
