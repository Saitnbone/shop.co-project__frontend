import { Link } from 'react-router-dom';
import { newArrivalsData } from '../model/newArrivalsData';
import s from './styles.module.scss';
import { FC } from 'react';

export const UiNewArrivals: FC<{
  cardTemplate: FC<{ item: (typeof newArrivalsData)[number] }>;
}> = ({ cardTemplate }) => {
  return (
    <>
      <h2 className={s.title}>New Arrivals</h2>
      <div className={s.newArrivalsList}>
        {newArrivalsData.map((item) => (
          <div key={item.id}>{cardTemplate({ item })}</div>
        ))}
      </div>
      <div className={s.buttonWrapper}>
        <button className={s.viewAllButton}>
          <Link to="/new-arrivals">View All</Link>
        </button>
      </div>
    </>
  );
};
