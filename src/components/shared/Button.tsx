import Link from "next/link";
import React from "react";

interface ButtonProps {
  label: string;
  link: string;
  customDesign?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  link,
  customDesign,
}) => {
  return (
    <Link
      href={link}
      className={
        customDesign
          ? `${customDesign}rounded-2xl px-4 py-3 tex-white transition-all`
          : `bg-[#000000] rounded-2xl px-4 py-3 text-white transition-all hover:bg-[#141414]`
      }
    >
      {label}
    </Link>
  );
};
