import { Link } from 'react-router-dom';
import { topSellingData } from '../model/topSellingData';
import { TTopSellingProps } from '../types/types';
import s from './styles.module.scss';

export const UiTopSelling = ({ CardTemplate }: TTopSellingProps) => {
  return (
    <>
      <h2 className={s.title}>Top Selling</h2>
      <div className={s.newTopSellingList}>
        {topSellingData.map((item) => (
          <div key={item.id}>{CardTemplate({ item })}</div>
        ))}
      </div>
      <div className={s.buttonWrapper}>
        <button className={s.viewAllButton}>
          <Link to="/top-selling">View All</Link>
        </button>
      </div>
    </>
  );
};
