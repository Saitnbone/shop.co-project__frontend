// import { sizesData } from '../../choose-size/model/data';
import { RootState } from '@/app/providers/store';
import { useSelector } from 'react-redux';
import s from './styles.module.scss';

export const UiChooseSize = () => {
  const sizes = useSelector(
    (state: RootState) => state.selectedProduct.variants
  );

  return (
    <div className={s.chooseSizeContainer}>
      <h3 className={s.sizeLabel}>Choose Size</h3>
      <ul className={s.sizesContainer}>
        {sizes.map((size) => (
          <li key={size.id} className={s.sizeItem}>
            <span className={s.sizeName}>{size.size.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
