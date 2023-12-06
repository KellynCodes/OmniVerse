import React from "react";

const page = () => {
  return (
    <form className="payment-form" action="">
      <input type="text" placeholder="Enter DID" />
      <textarea
        name=""
        id=""
        cols={30}
        rows={5}
        placeholder="Include message (optional)"
      ></textarea>
      <input type="submit" value="Purchase"></input>
    </form>
  );
};

export default page;
