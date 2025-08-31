import { FC } from 'react';
import { useState } from 'react';
import arrowRight from '@assets/catalog-page/arrow-right.svg';
import s from './styles.module.scss';

export const UiFilterSizes: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const takeSize = (size: string) => {
    console.log(`Selected size: ${size}`);
  };

  return (
    <div onClick={toggleOpen} className={s.filterSizes}>
      <div className={s.filterSizesHeader}>
        <h2 className={s.filterSizesTitle}>Size</h2>
        <img src={arrowRight} alt="Arrow right" />
      </div>
      {isOpen && (
        <ul className={s.sizeList}>
          <li className={s.sizeListItem} onClick={() => takeSize('XX-Small')}>
            <span className={s.sizeListItemText}>
              XX-Small
            </span>
          </li>
          <li className={s.sizeListItem} onClick={() => takeSize('X-Small')}>
            <span className={s.sizeListItemText}>
              X-Small
            </span>
          </li>
          <li className={s.sizeListItem} onClick={() => takeSize('Small')}>
            <span className={s.sizeListItemText}>
              Small
            </span>
          </li>
          <li className={s.sizeListItem} onClick={() => takeSize('Medium')}>
            <span className={s.sizeListItemText}>
              Medium
            </span>
          </li>
          <li className={s.sizeListItem} onClick={() => takeSize('Large')}>
            <span className={s.sizeListItemText}>
              Large
            </span>
          </li>
          <li className={s.sizeListItem} onClick={() => takeSize('X-Large')}>
            <span className={s.sizeListItemText}>
              X-Large
            </span>
          </li>
          <li className={s.sizeListItem} onClick={() => takeSize('XX-Large')}>
            <span className={s.sizeListItemText}>
              XX-Large
            </span>
          </li>
          <li className={s.sizeListItem} onClick={() => takeSize('3X-Large')}>
            <span className={s.sizeListItemText}>
              3X-Large
            </span>
          </li>
          <li className={s.sizeListItem} onClick={() => takeSize('4X-Large')}>
            <span className={s.sizeListItemText}>
              4X-Large
            </span>
          </li>
        </ul>
      )}
    </div>
  );
};
