import { FC } from 'react';
import s from './styles.module.scss';

export const UiFilterColors: FC = () => {
  return (
    <div className={s.filterColors}>
      <div className={s.filterColorsHeader}>
        <h2 className={s.filterColorsTitle}>Colors</h2>
      </div>
    </div>
  );
};
