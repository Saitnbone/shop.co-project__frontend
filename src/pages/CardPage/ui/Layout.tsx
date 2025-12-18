import { useParams } from 'react-router-dom';
import { useAppDispatch } from '@/shared/utils/useAppDispatch';
import { fetchProduct } from '@/entities/product/model/productSlice';
import { useState, useEffect } from 'react';
import { CardPageProps } from '../types/types';
import s from './style.module.scss';

export const UiCardPage = ({
  ProductSettings,
  ProductInformation,
  Recommendations,
  CreateCommentModal,
}: CardPageProps) => {
  const dispatch = useAppDispatch();
  const { cardId } = useParams<{ cardId: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (cardId) {
      dispatch(fetchProduct(cardId));
    }
  }, [dispatch, cardId]);

  return (
    <main className={s.main}>
      <div className={s.cardPageContentContainer}>
        <ProductSettings />
        <ProductInformation onWriteReviewClick={handleOpenModal} />
        <Recommendations />
        <CreateCommentModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </main>
  );
};
