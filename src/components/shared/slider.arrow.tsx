import Image from "next/image";

export function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <Image
      onClick={onClick}
      className="cursor-pointer"
      src="/svg/arrow-right.svg"
      alt="Next"
      width={24}
      height={24}
    />
  );
}

export function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <Image
      onClick={onClick}
      className="cursor-pointer"
      src="/svg/arrow-left.svg"
      alt="Previous"
      width={24}
      height={24}
    />
  );
}

