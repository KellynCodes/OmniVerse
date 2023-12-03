export default function Home() {
  return (
    <main>
      <img src="./images/Frame.jpg" alt="" />
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
    </main>
  );
}
