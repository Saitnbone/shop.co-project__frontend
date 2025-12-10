import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TProductResponse, TProductDetails } from '@/model/models';
import { getProductById } from '@/shared/api/getProductInfo';
import ReactStars from 'react-rating-stars-component';
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
          <ReactStars
            key={product?.product.raiting}
            count={5}
            value={Number(product?.product.raiting) || 0}
            size={24}
            isHalf={true}
            activeColor="#ffd700"
            edit={false}
          />
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
