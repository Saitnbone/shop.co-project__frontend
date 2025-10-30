import { CartItem } from '../components/cart-item/facade/facade';
import { UiCart } from '../ui/Layout';

export const Cart = () => {
  return <UiCart CartItem={CartItem} />;
};
