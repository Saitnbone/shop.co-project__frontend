import { ProductInformationProps } from '../types/types';
import s from './styles.module.scss';

export const UiProductInformation = ({
  ReviewsAndRatings,
  ProductDetails,
  ProductFAQ,
}: ProductInformationProps) => {
  return (
    <div className={s.productInformation}>
      <div className={s.tabs}>
        <div className={s.tabWrapper}>
          <span className={s.tab}>Product Details</span>
        </div>
        <div className={s.tabWrapper}>
          <span className={s.tab}>Rating & Reviews</span>
        </div>
        <div className={s.tabWrapper}>
          <span className={s.tab}>FAQs</span>
        </div>
      </div>
      <div className={s.content}>
        <ReviewsAndRatings />
        <ProductDetails />
        <ProductFAQ />
      </div>
    </div>
  );
};
