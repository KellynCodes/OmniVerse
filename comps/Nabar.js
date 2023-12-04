import Link from "next/link";

import React from 'react'

const Nabar = () => {
  return (
    <nav>
        <img src="./images/Frame.jpg" alt="" />
        <div className="options">
          <ul>
            <li className="shop">
              Shop <img src="./images/Vector-3.jpg" alt="" />{" "}
            </li>
            <Link href="/"><li>On Sale</li></Link>
            <Link href="/new"><li>New Arrivals</li></Link>
            <Link href="/brands"><li>Brands</li></Link>
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
  )
}

export default Nabar