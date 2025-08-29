import { FC } from 'react';
import s from './styles.module.scss';

export const UiFilterSizes: FC = () => {
  return (
    <div className={s.filterSizes}>
      <div className={s.filterSizesHeader}>
        <h2 className={s.filterSizesTitle}>Size</h2>
      </div>
    </div>
  );
};
