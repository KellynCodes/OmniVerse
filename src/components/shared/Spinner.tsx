import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-black"></div>
    </div>
  );
};

export default Spinner;
