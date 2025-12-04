import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getNewArrivalsProducts } from '../api/api';
import { newArrivalsData } from '../model/newArrivalsData';
import { TNewArrivalsItem } from '../model/newArrivalsData';
import { TNewArrivalsProps } from '../types/types';
import s from './styles.module.scss';

export const UiNewArrivals = ({ CardTemplate }: TNewArrivalsProps) => {
  const [newArrivalsData, setNewArrivalsData] = useState<TNewArrivalsItem[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNewArrivalsProducts();
      setNewArrivalsData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2 className={s.title}>New Arrivals</h2>
      <div className={s.newArrivalsList}>
        {newArrivalsData.map((item) => (
          <div key={item.id}>{CardTemplate({ item })}</div>
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
