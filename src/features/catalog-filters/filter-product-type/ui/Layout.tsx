import { RootState } from '@/app/providers/store';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../store/filtersSlice';
import { filterProductTypeData } from '../model/data';
import arrowRight from '@assets/catalog-page/arrow-right.svg';
import s from './styles.module.scss';

export const UiFilterProductType = () => {
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.filters.category);

  const takeCategory = (categoryName: string) => {
    const isSelected = category.includes(categoryName);

    if (isSelected) {
      dispatch(setCategory(category.filter((c) => c !== categoryName)));
    } else {
      dispatch(setCategory([...category, categoryName]));
    }
  };

  return (
    <ul className={s.filterProductType}>
      {filterProductTypeData.map((category) => (
        <li
          onClick={() => takeCategory(category.name)}
          className={s.filterProductTypeItem}
          key={category.id}
        >
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
