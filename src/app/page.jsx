export default function Home() {
  return (
    <main>
      <img src="./images/Frame.jpg" alt="" />
       {/* ===== NAVBAR START ====== */}
      <nav>
        <div className="options">
          <ul>
            <li className="shop">Shop <img src="./images/Vector-3.jpg" alt="" /> </li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
        </div>
        <div className="search-container">
          <img src="./images/Vector-1.png" alt="" />
          <input type="text" name="search" placeholder="Search for products..." />
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
            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
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
        <div>
          <div>

          </div>
        </div>
       </section>
    </main>
  );
}
