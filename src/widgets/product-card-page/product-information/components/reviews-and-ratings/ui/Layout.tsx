import { reviewsAndRatingsData } from '../model/data';
import s from './styles.module.scss';

export const UiReviewsAndRatings = () => {
  return (
    <section className={s.reviewsAndRatings}>
      <div className={s.container}>
        <div className={s.headerContainer}>
          <div className={s.header}>
            <h3 className={s.title}>All Reviews</h3>
            <span className={s.reviewCount}>(451)</span>
          </div>

          <div className={s.controls}>
            {/* @TODO: Нужно сделать кнопку на небольших экаранах устройств */}
            <div className={s.editIcon}>
              <img src="" alt="" />
            </div>
            <div className={s.latest}>Latest</div>
            <div className={s.writeReview}>Write a review</div>
          </div>
        </div>

        <div className={s.reviewsContainer}>
          {reviewsAndRatingsData.map((review) => (
            <div key={review.id} className={s.review}>
              <div className={s.rating}>
                <div className={s.stars}>
                  <img src="/star.png" alt="Star" />
                  <img src="/star.png" alt="Star" />
                  <img src="/star.png" alt="Star" />
                  <img src="/star.png" alt="Star" />
                  <img src="/star.png" alt="Star" />
                </div>
                <div className={s.editIcon}>
                  <img
                    className={s.editIconImage}
                    src="/edit-icon.svg"
                    alt="edit icon"
                  />
                </div>
              </div>
              <div className={s.userInfo}>
                <span className={s.userName}>{review.user.name}</span>
                <img src="/verification-icon.svg" alt="verification icon" />
              </div>
              <div className={s.comment}>{review.comment}</div>
              <div className={s.user}>
                <span className={s.datePosted}>Posted on {review.date}</span>
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
