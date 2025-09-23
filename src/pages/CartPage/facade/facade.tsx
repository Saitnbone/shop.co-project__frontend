import { OrderSummary } from '@/widgets/cart-page-widgets/order-summary';
import { Cart } from '@/widgets/cart-page-widgets/cart';
import { UiCartPage } from '../ui/Layout';

export const CartPage = () => {
  return <UiCartPage OrderSummary={OrderSummary} Cart={Cart} />;
};
