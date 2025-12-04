import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTopSellingProducts } from '../api/api';
import { TTopSellingItem } from '../model/topSellingData';
import { TTopSellingProps } from '../types/types';
import s from './styles.module.scss';

export const UiTopSelling = ({ CardTemplate }: TTopSellingProps) => {
  const [topSellingProducts, setTopSellingProducts] = useState<
    TTopSellingItem[]
  >([]);

  useEffect(() => {
    const fetchTopSellingProducts = async () => {
      await getTopSellingProducts().then((data) => {
        setTopSellingProducts(data);
      });
    };
    fetchTopSellingProducts();
  }, []);

  return (
    <>
      <h3 className={s.title}>Top Selling</h3>
      <div className={s.newTopSellingList}>
        {topSellingProducts &&
          topSellingProducts.map((item) => (
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
