import { UiProductInformation } from '../ui/Layout';
import { ProductDetails } from '../components/product-details';
import { ReviewsAndRatings } from '../components/reviews-and-ratings';
import { ProductFAQ } from '../components/faq';

export const ProductInformation = () => {
  return (
    <UiProductInformation
      ReviewsAndRatings={ReviewsAndRatings}
      ProductDetails={ProductDetails}
      ProductFAQ={ProductFAQ}
    />
  );
};
