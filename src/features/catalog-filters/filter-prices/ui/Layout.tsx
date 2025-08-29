import s from './styles.module.scss';
import arrowRight from '@assets/catalog-page/arrow-right.svg';

export const UiFilterPrices = () => {
  return (
    <div className={s.filterPrices}>
      <div className={s.filterPricesHeader}>
        <h2 className={s.filterPricesTitle}>Prices</h2>
        <img src={arrowRight} alt="Arrow right" />
      </div>
    </div>
  );
};
