import { UiHeader } from '../ui/Layout';
import { LogoUI } from '@/shared/ui/logo';
import { DropdownUI } from '@/shared/ui/dropdown/Dropdown';
import { Cart } from '@/widgets/cart';

export const Header: React.FC = () => {
  return <UiHeader logo={<LogoUI />} dropDown={<DropdownUI />} cart={<Cart />} />;
};
