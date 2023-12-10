import RatingAndReviews from "@/components/products/RatingAndReviews";
import MoreProductDetails from "@/components/products/MoreProductDetails";
import Faqs from "@/components/Faqs";

export const RenderCurrentPage = (page: string): React.ReactNode => {
  switch (page) {
    case "productDetails":
      return <MoreProductDetails />;
    case "ratingAndReview":
      return <RatingAndReviews />;
    case "faq":
      return <Faqs />;
    default:
      return <RatingAndReviews />;
  }
};
