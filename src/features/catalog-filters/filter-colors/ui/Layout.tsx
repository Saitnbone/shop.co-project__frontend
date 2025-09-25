import { FC } from 'react';
import { useState } from 'react';
import { setColors } from '../../store/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/providers/store';
import { filterColorsData } from '../model/data';
import arrowRight from '@assets/catalog-page/arrow-right.svg';
import s from './styles.module.scss';

export const UiFilterColors: FC = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const selectedColors = useSelector(
    (state: RootState) => state.filters.colors
  );

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const takeColor = (color: string) => {
    const isSelected = selectedColors.includes(color);
    if (isSelected) {
      dispatch(setColors(selectedColors.filter((c) => c !== color)));
    } else {
      dispatch(setColors([...selectedColors, color]));
    }
  };

  return (
    <div className={s.filterColors}>
      <div onClick={toggleOpen} className={s.filterColorsHeader}>
        <h2 className={s.filterColorsTitle}>Colors</h2>
        <img src={arrowRight} alt="Arrow right" />
      </div>
      {isOpen && (
        <ul className={s.colorsList}>
          {filterColorsData.map((color) => (
            <li
              key={color.id}
              className={`${s.colorListItem} ${s[`color${color.name}`]} ${selectedColors.includes(color.name) ? s.selected : ''}`}
              onClick={() => takeColor(color.name)}
            ></li>
          ))}
        </ul>
      )}
    </div>
  );
};
