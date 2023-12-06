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
      className={`${customDesign} border-[#0000001a] flex items-center justify-center rounded-[3.875rem] gap-[0.75rem] font-[500] text-base w-[13.625rem] h-[3.25rem] text-accent px-7 py-3 text-[0.9rem] transition-all`}
    >
      {label}
    </Link>
  );
};
