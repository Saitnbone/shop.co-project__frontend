import { FC, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import s from './styles.module.scss';
import arrowRight from '@assets/catalog-page/arrow-right.svg';

export const UiFilterPrices: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.filterPrices}>
      <div onClick={toggleOpen} className={s.filterPricesHeader}>
        <h2 className={s.filterPricesTitle}>Prices</h2>
        <img src={arrowRight} alt="Arrow right" />
      </div>
      {isOpen && (
        <div className={s.sliderContainer}>
          <Slider
            range
            min={0}
            max={1000}
            value={priceRange}
            onChange={(value) => setPriceRange(value as [number, number])}
            defaultValue={[20, 50]}
          />
          <div className={s.rangeDisplay}>
            <span className={s.rangeText}>
              ${priceRange[0]} - ${priceRange[1]}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
