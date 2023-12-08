export const settings = {
  className: "flex items-center justify-between w-full",
  dots: true,
  draggable: true,
  infinite: true,
  speed: 1000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};
