import ReactStars from 'react-rating-stars-component';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/providers/store';
import s from './styles.module.scss';

export const UiReviewsAndRatings = () => {
  const { comments } = useSelector((state: RootState) => state.selectedProduct);

  return (
    <section className={s.reviewsAndRatings}>
      <div className={s.container}>
        <div className={s.headerContainer}>
          <div className={s.header}>
            <h3 className={s.title}>All Reviews</h3>
            <span className={s.reviewCount}>(451)</span>
          </div>

          <div className={s.controls}>
            <div className={s.editIconWrapper}>
              <img src="/settings-icon.svg" alt="Settings icon" />
            </div>
            <div className={s.latest}>Latest</div>
            <div className={s.writeReview}>Write a review</div>
          </div>
        </div>

        <div className={s.reviewsContainer}>
          {comments.map((comment) => (
            <div key={comment.id} className={s.review}>
              <div className={s.rating}>
                <ReactStars
                  key={comment.id}
                  count={5}
                  value={Number(comment.rating) || 0}
                  size={24}
                  isHalf={true}
                  activeColor="#ffd700"
                  edit={false}
                />
                <div className={s.editIcon}>
                  <img
                    className={s.editIconImage}
                    src="/edit-icon.svg"
                    alt="edit icon"
                  />
                </div>
              </div>
              <div className={s.userInfo}>
                <span className={s.userName}>{comment.userName}</span>
                <img src="/verification-icon.svg" alt="verification icon" />
              </div>
              <div className={s.comment}>{comment.description}</div>
              <div className={s.user}>
                <span className={s.datePosted}>
                  Posted on {comment.createdAt}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className={s.loadMoreContainer}>
          <button className={s.loadMoreButton}>Load More Reviews</button>
        </div>
      </div>
    </section>
  );
};
