import { FC, useState } from 'react';
import arrowRight from '@assets/catalog-page/arrow-right.svg';
import s from './styles.module.scss';

export const UiFilterDressStyle: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.filterDressStyle}>
      <div onClick={toggleOpen} className={s.filterDressStyleHeader}>
        <h2 className={s.filterDressStyleTitle}>Dress Style</h2>
        <img src={arrowRight} alt="Arrow right" />
      </div>

      {isOpen && (
        <ul className={s.dressStyleList}>
          <li className={s.dressStyleListItem}>
            <span className={s.dressStyleListItemText}>Casual</span>
            <img src={arrowRight} alt="Arrow right" />
          </li>
          <li className={s.dressStyleListItem}>
            <span className={s.dressStyleListItemText}>Formal</span>
            <img src={arrowRight} alt="Arrow right" />
          </li>
          <li className={s.dressStyleListItem}>
            <span className={s.dressStyleListItemText}>Party</span>
            <img src={arrowRight} alt="Arrow right" />
          </li>
          <li className={s.dressStyleListItem}>
            <span className={s.dressStyleListItemText}>Gym</span>
            <img src={arrowRight} alt="Arrow right" />
          </li>
        </ul>
      )}
    </div>
  );
};
