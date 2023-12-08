import React from "react";

const SearchProduct = (search: any) => {
  return (
    <input
      className="bg-[#f0f0f0] w-[80%] rounded-2xl text-xs border-none outline-none"
      type="text"
      name="search"
      placeholder="Search for products..."
    />
  );
};

export default SearchProduct;
