import { useState } from 'react';
import { RootState } from '@/app/providers/store';
import { useSelector } from 'react-redux';
import ReactStars from 'react-rating-stars-component';
import { createComment } from '../api/api';
import s from './style.module.scss';

interface UiCreateCommentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UiCreateCommentModal = ({
  isOpen,
  onClose,
}: UiCreateCommentModalProps) => {
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const productInfo = useSelector(
    (state: RootState) => state.selectedProduct.product
  );

  const userId = useSelector((state: RootState) => state.userInfo.userInfo?.id);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      userName: formData.get('userName') as string,
      rating: rating,
      description: formData.get('description') as string,
      productId: productInfo?.id as string,
      userId: userId as string,
    };

    try {
      const result = await createComment(data);
      console.log('Comment created successfully:', result);
      onClose();
      // Опционально: показать успешное уведомление
    } catch (error) {
      console.error('Error creating comment:', error);
      // Опционально: показать ошибку
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={s.modalOverlay} onClick={handleOverlayClick}>
      <div className={s.modalContent}>
        <div className={s.modalHeader}>
          <span className={s.modalTitle}>Write a Review</span>
          <button
            type="button"
            className={s.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <form className={s.modalForm} onSubmit={handleSubmit}>
          <div className={s.formGroup}>
            <label htmlFor="userName" className={s.formLabel}>
              Your Name
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              className={s.formInput}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className={s.formGroup}>
            <label className={s.formLabel}>Your Rating</label>
            <div className={s.ratingContainer}>
              <ReactStars
                count={5}
                value={rating}
                onChange={(newRating: number) => setRating(newRating)}
                size={32}
                isHalf={true}
                activeColor="#FFC633"
                color="#E5E5E5"
                edit={true}
              />
            </div>
          </div>

          <div className={s.formGroup}>
            <label htmlFor="description" className={s.formLabel}>
              Your Review
            </label>
            <textarea
              className={s.formTextarea}
              id="description"
              name="description"
              placeholder="Share your thoughts about this product..."
              required
            />
          </div>

          <button
            className={s.submitButton}
            type="submit"
            disabled={isSubmitting || rating === 0}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Review'}
          </button>
        </form>
      </div>
    </div>
  );
};
