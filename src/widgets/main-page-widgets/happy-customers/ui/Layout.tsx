import { FC, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { reviewsData } from '../model/reviewsData';
import s from './styles.module.scss';

export const UiHappyCustomers: FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
    dragFree: false,
    containScroll: 'trimSnaps',
  });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <div className={s.container}>
      <div className={s.header}>
        <h2 className={s.title}>OUR HAPPY CUSTOMERS</h2>
        <div className={s.controls}>
          <img
            className={s.controlIcon}
            onClick={scrollPrev}
            src="/left-arrow.svg"
            alt="Control icon"
          />
          <img
            className={s.controlIcon}
            onClick={scrollNext}
            src="/right-arrow.svg"
            alt="Control icon"
          />
        </div>
      </div>

      <div className={s.embla} ref={emblaRef}>
        <div className={s.embla__container}>
          {reviewsData.map((sld) => (
            <div className={s.embla__slide} key={sld.id}>
              <div>
                <img src="/star.png" alt="Star" />
                <img src="/star.png" alt="Star" />
                <img src="/star.png" alt="Star" />
                <img src="/star.png" alt="Star" />
                <img src="/star.png" alt="Star" />
              </div>
              <div className={s.slideReviewerContainer}>
                 <h3 className={s.slideReviewer}>{sld.reviewer}</h3>
                 <img src="/confirm.svg" alt="Confirm icon" />
              </div>
              <p className={s.slideText}>{sld.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
