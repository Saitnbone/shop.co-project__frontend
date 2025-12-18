import { UiProductInformation } from '../ui/Layout';
import { ProductDetails } from '../components/product-details';
import { ReviewsAndRatings } from '../components/reviews-and-ratings';
import { ProductFAQ } from '../components/faq';

interface ProductInformationProps {
  onWriteReviewClick: () => void;
}

export const ProductInformation = ({
  onWriteReviewClick,
}: ProductInformationProps) => {
  return (
    <UiProductInformation
      onWriteReviewClick={onWriteReviewClick}
      ReviewsAndRatings={ReviewsAndRatings}
      ProductDetails={ProductDetails}
      ProductFAQ={ProductFAQ}
    />
  );
};
