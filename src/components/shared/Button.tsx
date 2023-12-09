import Link from "next/link";
import React from "react";

interface ButtonProps {
  label: string;
  link?: string;
  className?: string;
  style?: {};
}

export const Button: React.FC<ButtonProps> = ({
  label,
  link,
  className,
  style,
}) => {
  if (link != null && link.length > 0) {
    return (
      <Link
        style={style}
        href={link}
        className={`${className} border-[#0000001a] flex items-center justify-center rounded-[3.875rem] gap-[0.75rem] font-[500] text-base w-[13.625rem] h-[3.25rem] text-[0.9rem] transition-all`}
      >
        {label}
      </Link>
    );
  }
  return (
    <button
      style={style}
      className={`${className} border-[#0000001a] flex items-center justify-center rounded-[3.875rem] gap-[0.75rem] font-[500] text-base w-auto h-auto  text-[0.9rem] transition-all`}
    >
      {label}
    </button>
  );
};
