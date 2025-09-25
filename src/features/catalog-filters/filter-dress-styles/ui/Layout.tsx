import { FC, useState } from 'react';
import { RootState } from '@/app/providers/store';
import { setDressType } from '../../store/filtersSlice';
import { useSelector, useDispatch } from 'react-redux';
import arrowRight from '@assets/catalog-page/arrow-right.svg';
import { filterDressStylesData } from '../model/data';
import s from './styles.module.scss';

export const UiFilterDressStyle: FC = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const dressType = useSelector((state: RootState) => state.filters.dressType);

  const takeDressType = (type: string) => {
    const isSelected = dressType.includes(type);

    if (isSelected) {
      dispatch(setDressType(dressType.filter((t) => t !== type)));
    } else {
      dispatch(setDressType([...dressType, type]));
    }
  };

  return (
    <div className={s.filterDressStyle}>
      <div onClick={toggleOpen} className={s.filterDressStyleHeader}>
        <h2 className={s.filterDressStyleTitle}>Dress Style</h2>
        <img src={arrowRight} alt="Arrow right" />
      </div>

      {isOpen && (
        <ul className={s.dressStyleList}>
          {filterDressStylesData.map((style) => (
            <li key={style.id} className={s.dressStyleListItem}>
              <span
                className={s.dressStyleListItemText}
                onClick={() => takeDressType(style.name)}
              >
                {style.name}
              </span>
              <img src={arrowRight} alt="Arrow right" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
