export interface UiCartProps {
  CartItem: React.ComponentType<{ cartItem: ICartItem }>;
}

export interface ICartItem {
  id: number;
  image: string;
  title: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
}
