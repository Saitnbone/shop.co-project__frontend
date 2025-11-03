import { CartItem } from '../components/cart-item/facade/facade';
import { LogoUI } from '@/shared/ui/logo';
import { UiCart } from '../ui/Layout';

export const Cart = () => {
  return <UiCart CartItem={CartItem} LogoUI={LogoUI} />;
};
