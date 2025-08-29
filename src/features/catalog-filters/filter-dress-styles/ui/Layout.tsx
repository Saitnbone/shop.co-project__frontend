import { FC } from 'react';
import s from './styles.module.scss'

export const UiFilterDressStyle: FC = () => {
  return (
    <div className={s.filterDressStyle}>
        <div className={s.filterDressStyleHeader}>
            <h2 className={s.filterDressStyleTitle}>Dress Style</h2>
        </div>
    </div>
  );
};
