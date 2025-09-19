import type { ProductSettingsProps } from '../types/types';
import s from './styles.module.scss';

export const UiProductSettings = ({
  SelectImage,
  SelectColor,
  ChooseSize,
  ChooseQuantity,
  AddToCart,
}: ProductSettingsProps) => {
  return (
    <div className={s.productSettings}>
      <SelectImage />
      <div className={s.productInformation}>
        <h2 className={s.productName}>One Life Graphic T-shirt</h2>
        <div className={s.productRating}>
          <div className={s.stars}>
            <img className={s.star} src="/star.png" alt="Star rating" />
            <img className={s.star} src="/star.png" alt="Star rating" />
            <img className={s.star} src="/star.png" alt="Star rating" />
            <img className={s.star} src="/star.png" alt="Star rating" />
            <img className={s.star} src="/star.png" alt="Star rating" />
          </div>
          <span className={s.productRatingValue}>4.6/5</span>
        </div>
        <span className={s.productPrice}>$19.99</span>
        <p className={s.productDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <SelectColor />
        <ChooseSize />
        <div className={s.purchaseSection}>
          <ChooseQuantity />
          <AddToCart />
        </div>
      </div>
    </div>
  );
};
