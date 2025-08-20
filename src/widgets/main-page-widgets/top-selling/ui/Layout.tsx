import { Link } from 'react-router-dom';
import { topSellingData } from '../model/topSellingData';
import s from './styles.module.scss';
import { FC } from 'react';

export const UiTopSelling: FC<{
  cardTemplate: FC<{ item: (typeof topSellingData)[number] }>;
}> = ({ cardTemplate }) => {
  return (
    <>
      <h2 className={s.title}>Top Selling</h2>
      <div className={s.newTopSellingList}>
        {topSellingData.map((item) => (
          <div key={item.id}>{cardTemplate({ item })}</div>
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
