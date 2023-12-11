import RatingAndReviews from "@/components/products/RatingAndReviews";
import MoreProductDetails from "@/components/products/MoreProductDetails";
import Faqs from "@/components/Faqs";
import { Page } from "@/libs/data/enums/page";

export const RenderCurrentPage = (page: Page): React.ReactNode => {
  switch (page) {
    case Page.PRODUCT_DETAIL:
      return <MoreProductDetails />;
    case Page.REVIEW_RATING:
      return <RatingAndReviews />;
    case Page.FAQS:
      return <Faqs />;
    default:
      return <RatingAndReviews />;
  }
};
