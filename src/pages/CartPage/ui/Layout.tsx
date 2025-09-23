import { CartPageProps } from '../types/types';
import s from './styles.module.scss';

export const UiCartPage = ({ OrderSummary, Cart }: CartPageProps) => {
  return (
    <main className={s.cartPage}>
      <div className={s.cartPageContainer}>
        <OrderSummary />
        <Cart />
      </div>
    </main>
  );
};
