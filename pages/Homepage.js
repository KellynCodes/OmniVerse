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
  
        {/* HERO SECTION START */}
        <header className="hero">
          <img src="./images/hero.jpg" alt="" />
          <div className="hero-content">
            <div className="hero-content-width">
              <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p>
                Browse through our diverse range of meticulously crafted garments,
                designed to bring out your individuality and cater to your sense
                of style.
              </p>
              <button type="button">Shop Now</button>
              <div className="articles">
                <article>
                  <h2>200+</h2>
                  <p>International Brands</p>
                </article>
                <article>
                  <h2>2,000+</h2>
                  <p>High-Quality Products</p>
                </article>
                <article>
                  <h2>30,000+</h2>
                  <p>Happy Customers</p>
                </article>
              </div>
            </div>
          </div>
        </header>
        {/* HERO SECTION END */}
  
        {/* LOGO SECTION */}
        <div className="logo-section">
          <div className="logos">
            <img src="./images/Versace.png" alt="" />
            <img src="./images/zara-logo.png" alt="" />
            <img src="./images/gucci.png" alt="" />
            <img src="./images/prada-logo.png" alt="" />
            <img src="./images/calvin.png" alt="" />
          </div>
        </div>
  
        {/* PRODUCT SECTION START */}
        <section className="arrivals">
          <h1>NEW ARRIVALS</h1>
          <div className="container">
            <div className="card">
              <img className="image" src="./images/image-7.jpg" alt="" />
              <div className="article-content">
                <p>T-SHIRT WITH TAPE DETAILS</p>
                <article>
                  <div>
                    <img src="./images/Star-1.png" alt="" />
                    <img src="./images/Star-2.png" alt="" />
                    <img src="./images/Star-3.png" alt="" />
                    <img src="./images/Star-4.png" alt="" />
                    <img src="./images/Star-6.png" alt="" />
                  </div>
                  <span>4.5/5</span>
                </article>
                <p className="second">$120</p>
              </div>
            </div>
            <div className="card">
              <img className="image" src="./images/image-8.png" alt="" />
              <div className="article-content">
                <p>T-SHIRT WITH TAPE DETAILS</p>
                <article>
                  <div>
                    <img src="./images/Star-1.png" alt="" />
                    <img src="./images/Star-2.png" alt="" />
                    <img src="./images/Star-3.png" alt="" />
                    <img src="./images/Star-4.png" alt="" />
                    <img src="./images/Star-6.png" alt="" />
                  </div>
                  <span>4.5/5</span>
                </article>
                <p className="second">$120</p>
              </div>
            </div>
            <div className="card">
              <img className="image" src="./images/image-9.png" alt="" />
              <div className="article-content">
                <p>T-SHIRT WITH TAPE DETAILS</p>
                <article>
                  <div>
                    <img src="./images/Star-1.png" alt="" />
                    <img src="./images/Star-2.png" alt="" />
                    <img src="./images/Star-3.png" alt="" />
                    <img src="./images/Star-4.png" alt="" />
                    <img src="./images/Star-6.png" alt="" />
                  </div>
                  <span>4.5/5</span>
                </article>
                <p className="second">$120</p>
              </div>
            </div>
            <div className="card">
              <img className="image" src="./images/image-10.png" alt="" />
              <div className="article-content">
                <p className="first">T-SHIRT WITH TAPE DETAILS</p>
                <article>
                  <div>
                    <img src="./images/Star-1.png" alt="" />
                    <img src="./images/Star-2.png" alt="" />
                    <img src="./images/Star-3.png" alt="" />
                    <img src="./images/Star-4.png" alt="" />
                    <img src="./images/Star-6.png" alt="" />
                  </div>
                  <span>4.5/5</span>
                </article>
                <p className="second">$120</p>
              </div>
            </div>
          </div>
          <button type="button"> View All </button>
        </section>
  
        <div className="border"></div>
  
        <section className=" top-selling">
          <h1>top selling</h1>
          <div className="container">
            <div className="card">
              <img className="image" src="./images/image-7.jpg" alt="" />
              <div className="article-content">
                <p>T-SHIRT WITH TAPE DETAILS</p>
                <article>
                  <div>
                    <img src="./images/Star-1.png" alt="" />
                    <img src="./images/Star-2.png" alt="" />
                    <img src="./images/Star-3.png" alt="" />
                    <img src="./images/Star-4.png" alt="" />
                    <img src="./images/Star-6.png" alt="" />
                  </div>
                  <span>4.5/5</span>
                </article>
                <p className="second">$120</p>
              </div>
            </div>
            <div className="card">
              <img className="image" src="./images/image-8.png" alt="" />
              <div className="article-content">
                <p>T-SHIRT WITH TAPE DETAILS</p>
                <article>
                  <div>
                    <img src="./images/Star-1.png" alt="" />
                    <img src="./images/Star-2.png" alt="" />
                    <img src="./images/Star-3.png" alt="" />
                    <img src="./images/Star-4.png" alt="" />
                    <img src="./images/Star-6.png" alt="" />
                  </div>
                  <span>4.5/5</span>
                </article>
                <p className="second">$120</p>
              </div>
            </div>
            <div className="card">
              <img className="image" src="./images/image-9.png" alt="" />
              <div className="article-content">
                <p>T-SHIRT WITH TAPE DETAILS</p>
                <article>
                  <div>
                    <img src="./images/Star-1.png" alt="" />
                    <img src="./images/Star-2.png" alt="" />
                    <img src="./images/Star-3.png" alt="" />
                    <img src="./images/Star-4.png" alt="" />
                    <img src="./images/Star-6.png" alt="" />
                  </div>
                  <span>4.5/5</span>
                </article>
                <p className="second">$120</p>
              </div>
            </div>
            <div className="card">
              <img className="image" src="./images/image-10.png" alt="" />
              <div className="article-content">
                <p className="first">T-SHIRT WITH TAPE DETAILS</p>
                <article>
                  <div>
                    <img src="./images/Star-1.png" alt="" />
                    <img src="./images/Star-2.png" alt="" />
                    <img src="./images/Star-3.png" alt="" />
                    <img src="./images/Star-4.png" alt="" />
                    <img src="./images/Star-6.png" alt="" />
                  </div>
                  <span>4.5/5</span>
                </article>
                <p className="second">$120</p>
              </div>
            </div>
          </div>
          <button type="button"> View All </button>
        </section>
  
        <section className="reviews-section">
          <h1>OUR HAPPY CUSTOMERS</h1>
          <div className="reviews-container">
            <div className="reviews-card">
              <div className="review-star">
                <img src="./images/Star-1.png" alt="" />
                <img src="./images/Star-1.png" alt="" />
                <img src="./images/Star-1.png" alt="" />
                <img src="./images/Star-1.png" alt="" />
                <img src="./images/Star-1.png" alt="" />
              </div>
              <div className="reviewer">
                <p>Sarah M.</p>
                <img src="./images/check.png" alt="" />
              </div>
              <span>
                "I'm blown away by the quality and style of the clothes I received
                from Shop.co. From casual wear to elegant dresses, every piece
                I've bought has exceeded my expectations.”
              </span>
            </div>
            <div className="reviews-card">
              <div className="review-star">
                <img src="./images/Star-1.png" alt="" />
                <img src="./images/Star-1.png" alt="" />
                <img src="./images/Star-1.png" alt="" />
                <img src="./images/Star-1.png" alt="" />
                <img src="./images/Star-1.png" alt="" />
              </div>
              <div className="reviewer">
                <p>Alex K.</p>
                <img src="./images/check.png" alt="" />
              </div>
              <span>
                "Finding clothes that align with my personal style used to be a
                challenge until I discovered Shop.co. The range of options they
                offer is truly remarkable, catering to a variety of tastes and
                occasions.”
              </span>
            </div>
            <div className="reviews-card">
              <div className="review-star">
                <img src="./images/Star-1.png" alt="" />
                <img src="./images/Star-1.png" alt="" />
                <img src="./images/Star-1.png" alt="" />
                <img src="./images/Star-1.png" alt="" />
                <img src="./images/Star-1.png" alt="" />
              </div>
              <div className="reviewer">
                <p>James L.</p>
                <img src="./images/check.png" alt="" />
              </div>
              <span>
              "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”
              </span>
            </div>
          </div>
        </section>
  
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