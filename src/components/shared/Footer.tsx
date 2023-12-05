import React from "react";
import Image from "next/image";

const Footer = (): React.JSX.Element => {
  return (
    <footer>
      <div className="footer-container">
        <div className="socials-card">
          <p>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="socials">
            <Image src="/Images/1.png" width={28} height={28} alt="" />
            <Image src="/Images/2.png" width={28} height={28} alt="" />{" "}
            <Image src="/Images/3.png" width={28} height={28} alt="" />{" "}
            <Image src="/Images/4.png" width={28} height={28} alt="" />
          </div>
        </div>
        <div className="footer-details">
          <h2>Company</h2>
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
        <div className="footer-details">
          <h2>Help</h2>
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
          <h2>FAQ</h2>
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

      <div className="form">
        <div className="form-container">
          <div>
            <h1>
              STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
            </h1>
          </div>
          <form action="">
            <div className="input-1">
              <Image src="/Images/email.png" width={28} height={28} alt="" />
              <input
                type="text"
                name="search"
                placeholder="Enter your email address"
              />
            </div>
            <button className="btn-input" type="button">
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </div>

      <div className="border-1"></div>

      <p className="footer-text">OmniVerse © 2000-2023, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
