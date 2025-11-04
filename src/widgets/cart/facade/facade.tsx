import { CartItem } from '../components/cart-item/facade/facade';
import { LogoUI } from '@/shared/ui/logo';
import { UiCart } from '../ui/Layout';

export const Cart = ({
  toggleDropdown,
  open,
}: {
  open: boolean;
  toggleDropdown: () => void;
}) => {
  return (
    <UiCart
      open={open}
      CartItem={CartItem}
      LogoUI={LogoUI}
      toggleDropdown={toggleDropdown}
    />
  );
};
