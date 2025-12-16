import { RootState } from '@/app/providers/store';
import { useSelector } from 'react-redux';
import s from './styles.module.scss';

export const UiSelectColor = () => {
  const variants = useSelector(
    (state: RootState) => state.selectedProduct.variants
  );

  return (
    <div className={s.colorsContainer}>
      <h3 className={s.colorLabel}>Choose color</h3>
      <ul className={s.colorOption}>
        {variants.map((item) => (
          <li
            key={item.id}
            className={s.colorItem}
            style={{ backgroundColor: item.color.hex }}
          ></li>
        ))}
      </ul>
    </div>
  );
};
