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
    </main>
  );
}
