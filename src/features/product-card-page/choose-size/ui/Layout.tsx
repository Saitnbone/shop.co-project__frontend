import { sizesData } from '../../choose-size/model/data';
import s from './styles.module.scss';

export const UiChooseSize = () => {
  return (
    <div className={s.chooseSizeContainer}>
      <h3 className={s.sizeLabel}>Choose Size</h3>
      <ul className={s.sizesContainer}>
        {sizesData.map((size) => (
          <li key={size.id} className={s.sizeItem}>
            <span className={s.sizeName}>{size.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
