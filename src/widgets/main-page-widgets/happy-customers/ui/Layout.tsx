import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { TReviewItem } from '../model/reviewsData';
import { getTopComments } from '../../happy-customers/api/api';
import s from './styles.module.scss';

export const UiHappyCustomers = () => {
  const [reviews, setReviews] = useState<TReviewItem[]>([]);
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

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelected = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelected);
    onSelected();
  }, [emblaApi, onSelected]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTopComments();
      setReviews(data);
    };
    fetchData();
  }, []);

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
          {reviews.map((sld, index) => (
            <div
              className={`${s.embla__slide} ${
                Math.abs(index - selectedIndex) <= 1 ? '' : s.blurred
              }`}
              key={sld.id}
            >
              <div>
                <img src="/star.png" alt="Star" />
                <img src="/star.png" alt="Star" />
                <img src="/star.png" alt="Star" />
                <img src="/star.png" alt="Star" />
                <img src="/star.png" alt="Star" />
              </div>
              <div className={s.slideReviewerContainer}>
                <h3 className={s.slideReviewer}>{sld.userName}</h3>
                <img src="/confirm.svg" alt="Confirm icon" />
              </div>
              <p className={s.slideText}>{sld.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
