import { colorData } from '../model/data';
import s from './styles.module.scss';

export const UiSelectColor = () => {
  return (
    <div className={s.colorsContainer}>
      <h3 className={s.colorLabel}>Choose color</h3>
      <ul className={s.colorOption}>
        {colorData.map((item) => (
          <li
            key={item.id}
            className={s.colorItem}
            style={{ backgroundColor: item.hex }}
          ></li>
        ))}
      </ul>
    </div>
  );
};
