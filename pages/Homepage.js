import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <Image src="/Images/Frame.jpg" width={1000} height={58} alt="" />

      {/* ===== NAVBAR START ====== */}
      <nav>
        <div className="options">
          <ul>
            <li className="shop">
              Shop
              <Image src="/Images/Vector-3.jpg" width={58} height={58} alt="" />
            </li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
        </div>
        <div className="search-container">
          <Image src="/Images/Vector-1.png" width={24} height={24} alt="" />
          <input
            type="text"
            name="search"
            placeholder="Search for products..."
          />
        </div>
        <div>
          <Image src="/Images/Vector-2.jpg" width={33} height={33} alt="" />
        </div>
      </nav>
      {/* ===== NAVBAR END ====== */}

      {/* HERO SECTION START */}
      <header className="hero">
        <Image src="/Images/hero.jpg" width={1000} height={663} alt="" />
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
          <Image src="/Images/versace.png" width={160} height={25} alt="" />
          <Image src="/Images/zara-logo.png" width={160} height={25} alt="" />
          <Image src="/Images/gucci-logo.png" width={160} height={25} alt="" />
          <Image src="/Images/prada-logo.png" width={160} height={25} alt="" />
          <Image src="/Images/calvin.png" width={160} height={25} alt="" />
        </div>
      </div>

      {/* PRODUCT SECTION START */}
      <section className="arrivals">
        <h1>NEW ARRIVALS</h1>
        <div className="container">
          <div className="card">
            <Image src="/Images/image-7.jpg" width={295} height={298} alt="" />
            <div className="article-content">
              <p>T-SHIRT WITH TAPE DETAILS</p>
              <article>
                <div>
                  <Image
                    src="/Images/Star-1.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image
                    src="/Images/Star-2.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image
                    src="/Images/Star-3.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image src="/Images/Star-1.png" width={18.5} height={18.5} alt="" />
                  <Image
                    src="/Images/Star-6.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                </div>
                <span>4.5/5</span>
              </article>
              <p className="second">$120</p>
            </div>
          </div>
          <div className="card">
            <Image src="/Images/image-8.png" width={295} height={298} alt="" />
            <div className="article-content">
              <p>T-SHIRT WITH TAPE DETAILS</p>
              <article>
                <div>
                <Image
                    src="/Images/Star-1.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image
                    src="/Images/Star-2.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image
                    src="/Images/Star-3.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image src="/Images/Star-1.png" width={18.5} height={18.5} alt="" />
                  <Image
                    src="/Images/Star-6.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                </div>
                <span>4.5/5</span>
              </article>
              <p className="second">$120</p>
            </div>
          </div>
          <div className="card">
            <Image src="/Images/image-9.png" width={295} height={298} alt="" />
            <div className="article-content">
              <p>T-SHIRT WITH TAPE DETAILS</p>
              <article>
                <div>
                <Image
                    src="/Images/Star-1.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image
                    src="/Images/Star-2.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image
                    src="/Images/Star-3.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image src="/Images/Star-1.png" width={18.5} height={18.5} alt="" />
                  <Image
                    src="/Images/Star-6.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                </div>
                <span>4.5/5</span>
              </article>
              <p className="second">$120</p>
            </div>
          </div>
          <div className="card">
            <Image src="/Images/image-10.png" width={295} height={298} alt="" />
            <div className="article-content">
              <p className="first">T-SHIRT WITH TAPE DETAILS</p>
              <article>
                <div>
                <Image
                    src="/Images/Star-1.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image
                    src="/Images/Star-2.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image
                    src="/Images/Star-3.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image src="/Images/Star-1.png" width={18.5} height={18.5} alt="" />
                  <Image
                    src="/Images/Star-6.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
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
            <Image src="/Images/image-1.png" width={295} height={298} alt="" />
            <div className="article-content">
              <p>T-SHIRT WITH TAPE DETAILS</p>
              <article>
                <div>
                <Image
                    src="/Images/Star-1.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image
                    src="/Images/Star-2.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image
                    src="/Images/Star-3.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image src="/Images/Star-1.png" width={18.5} height={18.5} alt="" />
                  <Image
                    src="/Images/Star-6.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                </div>
                <span>4.5/5</span>
              </article>
              <p className="second">$120</p>
            </div>
          </div>
          <div className="card">
            <Image src="/Images/image-2.png" width={295} height={298} alt="" />
            <div className="article-content">
              <p>T-SHIRT WITH TAPE DETAILS</p>
              <article>
                <div>
                <Image
                    src="/Images/Star-1.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image
                    src="/Images/Star-2.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image
                    src="/Images/Star-3.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image src="/Images/Star-1.png" width={18.5} height={18.5} alt="" />
                  <Image
                    src="/Images/Star-6.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                </div>
                <span>4.5/5</span>
              </article>
              <p className="second">$120</p>
            </div>
          </div>
          <div className="card">
            <Image src="/Images/image-3.png" width={295} height={298} alt="" />
            <div className="article-content">
              <p>T-SHIRT WITH TAPE DETAILS</p>
              <article>
                <div>
                <Image
                    src="/Images/Star-1.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image
                    src="/Images/Star-2.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image
                    src="/Images/Star-3.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image src="/Images/Star-1.png" width={18.5} height={18.5} alt="" />
                  <Image
                    src="/Images/Star-6.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                </div>
                <span>4.5/5</span>
              </article>
              <p className="second">$120</p>
            </div>
          </div>
          <div className="card">
            <Image src="/Images/image-4.png" width={295} height={298} alt="" />
            <div className="article-content">
              <p className="first">T-SHIRT WITH TAPE DETAILS</p>
              <article>
                <div>
                <Image
                    src="/Images/Star-1.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image
                    src="/Images/Star-2.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image
                    src="/Images/Star-3.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image src="/Images/Star-1.png" width={18.5} height={18.5} alt="" />
                  <Image
                    src="/Images/Star-6.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
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
            <Image
                    src="/Images/Star-1.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image
                    src="/Images/Star-2.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image
                    src="/Images/Star-3.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image src="/Images/Star-1.png" width={18.5} height={18.5} alt="" />
                  <Image
                    src="/Images/Star-1.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
            </div>
            <div className="reviewer">
              <p>Sarah M.</p>
              <Image
                    src="/Images/check.png"
                    width={24}
                    height={24}
                    alt=""
                  />
            </div>
            <span>
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations.”
            </span>
          </div>
          <div className="reviews-card">
            <div className="review-star">
            <Image
                    src="/Images/Star-1.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image
                    src="/Images/Star-2.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image
                    src="/Images/Star-3.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image src="/Images/Star-1.png" width={18.5} height={18.5} alt="" />
                  <Image
                    src="/Images/Star-1.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
            </div>
            <div className="reviewer">
              <p>Alex K.</p>
              <Image
                    src="/Images/check.png"
                    width={24}
                    height={24}
                    alt=""
                  />
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
            <Image
                    src="/Images/Star-1.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image
                    src="/Images/Star-2.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image
                    src="/Images/Star-3.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
                  <Image src="/Images/Star-1.png" width={18.5} height={18.5} alt="" />
                  <Image
                    src="/Images/Star-1.png"
                    width={18.5}
                    height={18.5}
                    alt=""
                  />
            </div>
            <div className="reviewer">
              <p>James L.</p>
              <Image
                    src="/Images/check.png"
                    width={24}
                    height={24}
                    alt=""
                  />
            </div>
            <span>
              "As someone who's always on the lookout for unique fashion pieces,
              I'm thrilled to have stumbled upon Shop.co. The selection of
              clothes is not only diverse but also on-point with the latest
              trends.”
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
            <Image
                    src="/Images/1.png"
                    width={28}
                    height={28}
                    alt=""
                  />
               <Image
                    src="/Images/2.png"
                    width={28}
                    height={28}
                    alt=""
                  /> <Image
                  src="/Images/3.png"
                  width={28}
                  height={28}
                  alt=""
                /> <Image
                src="/Images/4.png"
                width={28}
                height={28}
                alt=""
              />
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
              <Image
                    src="/Images/email.png"
                    width={28}
                    height={28}
                    alt=""
                  />
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
