import React from "react";
import { Button } from "./Button";

const ItemNotFound: React.FC<{
  buttonLabel: string;
  navigationLink: string;
  message: string;
}> = ({ buttonLabel, navigationLink, message }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto gap-y-5 mx-auto my-9 min-h-[50vh]">
      <h5 className="font-[500] text-2xl text-accent">{message}</h5>

      <Button
        link={navigationLink}
        label={buttonLabel}
        className="bg-accent text-white px-7 py-4"
      />
    </div>
  );
};

export default ItemNotFound;
