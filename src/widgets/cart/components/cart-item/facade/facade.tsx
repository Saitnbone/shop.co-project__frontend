import { ICartItem } from '../types/types';
import { UiCartItem } from '../ui/Layout';

export const CartItem = ({ cartItem }: { cartItem: ICartItem }) => {
  return <UiCartItem cartItem={cartItem} />;
};
