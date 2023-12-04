export default function Home() {
  return (
    <main>
      <img src="./images/Frame.jpg" alt="" />
      {/* ===== NAVBAR START ====== */}
      <nav>
        <div className="options">
          <ul>
            <li className="shop">
              Shop <img src="./images/Vector-3.jpg" alt="" />{" "}
            </li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
        </div>
        <div className="search-container">
          <img src="./images/Vector-1.png" alt="" />
          <input
            type="text"
            name="search"
            placeholder="Search for products..."
          />
        </div>
        <div>
          <img src="./images/Vector-2.jpg" alt="" />
        </div>
      </nav>
      {/* ===== NAVBAR END ====== */}

      {/* PAYMENT PAGE */}
      <form className="payment-form" action="">
        <input type="text" placeholder="Enter DID"/>
        <textarea name="" id="" cols="30" rows="5" placeholder="Include message (optional)"></textarea>
        <input type="submit" value="Purchase"></input>
      </form>

      <footer>
        <div className="footer-container">
          <div className="socials-card">
            <p>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="socials">
              <img src="./images/1.png" alt="" />
              <img src="./images/2.png" alt="" />
              <img src="./images/3.png" alt="" />
              <img src="./images/4.png" alt="" />
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
                <img src="./images/email.png" alt="" />
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

        <p className="footer-text">
          Wedevforaliving © 2000-2023, All Rights Reserved
        </p>
      </footer>
    </main>
  );
}
