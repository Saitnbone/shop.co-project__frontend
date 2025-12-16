import { useParams } from 'react-router-dom';
import { useAppDispatch } from '@/shared/utils/useAppDispatch';
import { fetchProduct } from '@/entities/product/model/productSlice';
import { useEffect } from 'react';
import { CardPageProps } from '../types/types';
import s from './style.module.scss';

export const UiCardPage = ({
  ProductSettings,
  ProductInformation,
  Recommendations,
}: CardPageProps) => {
  const dispatch = useAppDispatch();
  const { cardId } = useParams<{ cardId: string }>();

  useEffect(() => {
    if (cardId) {
      dispatch(fetchProduct(cardId));
    }
  }, [dispatch, cardId]);

  return (
    <main className={s.main}>
      <div className={s.cardPageContentContainer}>
        <ProductSettings />
        <ProductInformation />
        <Recommendations />
      </div>
    </main>
  );
};
