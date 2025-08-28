import { filterProductTypeData } from '../model/data';
import arrowRight from '@assets/catalog-page/arrow-right.svg';
import s from './styles.module.scss';

export const UiFilterProductType = () => {
  return (
    <ul className={s.filterProductType}>
      {filterProductTypeData.map((category) => (
        <li className={s.filterProductTypeItem} key={category.id}>
          <div className={s.filterProductTypeItemContent}>
            <span className={s.filterProductTypeItemName}>{category.name}</span>
            <div className={s.filterProductTypeItemArrow}>
              <img
                className={s.filterProductTypeItemArrowImage}
                src={arrowRight}
                alt="Arrow"
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
