import { FC } from 'react';
import { useState } from 'react';
import { setColors } from '../../store/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/providers/store';
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
          <li
            className={`${s.colorListItem} ${s.colorGreen} ${selectedColors.includes('Green') ? s.selected : ''}`}
            onClick={() => takeColor('Green')}
          ></li>
          <li
            className={`${s.colorListItem} ${s.colorRed} ${selectedColors.includes('Red') ? s.selected : ''}`}
            onClick={() => takeColor('Red')}
          ></li>
          <li
            className={`${s.colorListItem} ${s.colorBlue} ${selectedColors.includes('Blue') ? s.selected : ''}`}
            onClick={() => takeColor('Blue')}
          ></li>
          <li
            className={`${s.colorListItem} ${s.colorYellow} ${selectedColors.includes('Yellow') ? s.selected : ''}`}
            onClick={() => takeColor('Yellow')}
          ></li>
          <li
            className={`${s.colorListItem} ${s.colorOrange} ${selectedColors.includes('Orange') ? s.selected : ''}`}
            onClick={() => takeColor('Orange')}
          ></li>
          <li
            className={`${s.colorListItem} ${s.colorAqua} ${selectedColors.includes('Aqua') ? s.selected : ''}`}
            onClick={() => takeColor('Aqua')}
          ></li>
          <li
            className={`${s.colorListItem} ${s.colorBlue} ${selectedColors.includes('Blue') ? s.selected : ''}`}
            onClick={() => takeColor('Blue')}
          ></li>
          <li
            className={`${s.colorListItem} ${s.colorPurple} ${selectedColors.includes('Purple') ? s.selected : ''}`}
            onClick={() => takeColor('Purple')}
          ></li>
          <li
            className={`${s.colorListItem} ${s.colorPink} ${selectedColors.includes('Pink') ? s.selected : ''}`}
            onClick={() => takeColor('Pink')}
          ></li>
          <li
            className={`${s.colorListItem} ${s.colorWhite} ${selectedColors.includes('White') ? s.selected : ''}`}
            onClick={() => takeColor('White')}
          ></li>
          <li
            className={`${s.colorListItem} ${s.colorBlack} ${selectedColors.includes('Black') ? s.selected : ''}`}
            onClick={() => takeColor('Black')}
          ></li>
        </ul>
      )}
    </div>
  );
};
