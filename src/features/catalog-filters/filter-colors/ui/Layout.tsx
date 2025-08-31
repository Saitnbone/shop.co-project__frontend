import { FC } from 'react';
import { useState } from 'react';
import arrowRight from '@assets/catalog-page/arrow-right.svg';
import s from './styles.module.scss';

export const UiFilterColors: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const takeColor = (color: string) => {
    console.log(`Selected color: ${color}`);
  };

  return (
    <div onClick={toggleOpen} className={s.filterColors}>
      <div className={s.filterColorsHeader}>
        <h2 className={s.filterColorsTitle}>Colors</h2>
        <img src={arrowRight} alt="Arrow right" />
      </div>
      {isOpen && (
        <ul className={s.colorsList}>
          <li
            className={`${s.colorListItem} ${s.colorGreen}`}
            onClick={() => takeColor('Green')}
          ></li>
          <li
            className={`${s.colorListItem} ${s.colorRed}`}
            onClick={() => takeColor('Red')}
          ></li>
          <li
            className={`${s.colorListItem} ${s.colorBlue}`}
            onClick={() => takeColor('Blue')}
          ></li>
          <li
            className={`${s.colorListItem} ${s.colorYellow}`}
            onClick={() => takeColor('Yellow')}
          ></li>
          <li
            className={`${s.colorListItem} ${s.colorOrange}`}
            onClick={() => takeColor('Orange')}
          ></li>
          <li
            className={`${s.colorListItem} ${s.colorAqua}`}
            onClick={() => takeColor('Aqua')}
          ></li>
          <li
            className={`${s.colorListItem} ${s.colorBlue}`}
            onClick={() => takeColor('Blue')}
          ></li>
          <li
            className={`${s.colorListItem} ${s.colorPurple}`}
            onClick={() => takeColor('Purple')}
          ></li>
          <li
            className={`${s.colorListItem} ${s.colorPink}`}
            onClick={() => takeColor('Pink')}
          ></li>
          <li
            className={`${s.colorListItem} ${s.colorWhite}`}
            onClick={() => takeColor('White')}
          ></li>
          <li
            className={`${s.colorListItem} ${s.colorBlack}`}
            onClick={() => takeColor('Black')}
          ></li>
        </ul>
      )}
    </div>
  );
};
