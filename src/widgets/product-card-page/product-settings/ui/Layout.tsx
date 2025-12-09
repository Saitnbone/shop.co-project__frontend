import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TProductResponse, TProductDetails } from '@/model/models';
import { getProductById } from '@/shared/api/getProductInfo';
import type { ProductSettingsProps } from '../types/types';
import s from './styles.module.scss';

export const UiProductSettings = ({
  SelectImage,
  SelectColor,
  ChooseSize,
  ChooseQuantity,
  AddToCart,
}: ProductSettingsProps) => {
  const [product, setProduct] = useState<TProductDetails | null>(null);
  const { cardId } = useParams<{ cardId: string }>();

  useEffect(() => {
    async function fetchProduct(): Promise<TProductResponse | void> {
      const productResponse = await getProductById(cardId || '');
      setProduct(productResponse);
    }
    fetchProduct();
  }, [cardId]);

  return (
    <div className={s.productSettings}>
      <SelectImage />
      <div className={s.productInformation}>
        <h2 className={s.productName}>{product?.product.name}</h2>
        <div className={s.productRating}>
          <div className={s.stars}>
            <img className={s.star} src="/star.png" alt="Star rating" />
            <img className={s.star} src="/star.png" alt="Star rating" />
            <img className={s.star} src="/star.png" alt="Star rating" />
            <img className={s.star} src="/star.png" alt="Star rating" />
            <img className={s.star} src="/star.png" alt="Star rating" />
          </div>
          <span className={s.productRatingValue}>
            {product?.product.raiting} /5
          </span>
        </div>
        <span className={s.productPrice}>${product?.product.price}</span>
        <p className={s.productDescription}>{product?.product.description}</p>
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
