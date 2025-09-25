import { FC } from 'react';
import { RootState } from '@/app/providers/store';
import { useSelector, useDispatch } from 'react-redux';
import { setSizes } from '../../store/filtersSlice';
import { filterSizesData } from '../model/data';
import { useState } from 'react';
import arrowRight from '@assets/catalog-page/arrow-right.svg';
import s from './styles.module.scss';

export const UiFilterSizes: FC = () => {
  const dispatch = useDispatch();
  const selectedSizes = useSelector((state: RootState) => state.filters.sizes);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const takeSize = (size: string) => {
    const isSelected = selectedSizes.includes(size);

    if (isSelected) {
      dispatch(setSizes(selectedSizes.filter((s) => s !== size)));
    } else {
      dispatch(setSizes([...selectedSizes, size]));
    }
  };

  return (
    <div className={s.filterSizes}>
      <div onClick={toggleOpen} className={s.filterSizesHeader}>
        <h2 className={s.filterSizesTitle}>Size</h2>
        <img src={arrowRight} alt="Arrow right" />
      </div>
      {isOpen && (
        <ul className={s.sizeList}>
          {filterSizesData.map((size) => (
            <li
              key={size.id}
              className={`${s.sizeListItem} ${selectedSizes.includes(size.name) ? s.selected : ''}`}
              onClick={() => takeSize(size.name)}
            >
              <span className={s.sizeListItemText}>{size.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
