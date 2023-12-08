import Link from "next/link";
import React from "react";

interface ButtonProps {
  label: string;
  link?: string;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  link,
  className,
  onClick,
}) => {
  if (link != null && link.length > 0) {
    return (
      <Link
        href={link}
        className={`${className} border-[#0000001a] flex items-center justify-center rounded-[3.875rem] gap-[0.75rem] font-[500] text-base w-[13.625rem] h-[3.25rem] text-accent text-[0.9rem] transition-all`}
      >
        {label}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`${className} border-[#0000001a] flex items-center justify-center rounded-[3.875rem] gap-[0.75rem] font-[500] text-base w-auto h-auto text-accent text-[0.9rem] transition-all`}
    >
      {label}
    </button>
  );
};
