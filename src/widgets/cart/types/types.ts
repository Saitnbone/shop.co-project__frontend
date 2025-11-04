export interface UiCartProps {
  open: boolean;
  toggleDropdown: () => void;
  CartItem: React.ComponentType<{ cartItem: ICartItem }>;
  LogoUI: React.ComponentType;
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
