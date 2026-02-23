export interface UiCartProps {
  open: boolean;
  toggleDropdown: () => void;
  CartItem: React.ComponentType<{ cartItem: ICartItem }>;
  LogoUI: React.ComponentType;
}

export interface ICartItem {
  variantId: string;
  quantity: number;
  image: string;
  name: string;
  price: string;
  color: string;
  size: string;
}
