import { useState } from 'react';
import { UiHeader } from '../ui/Layout';
import { LogoUI } from '@/shared/ui/logo';
import { DropdownUI } from '@/shared/ui/dropdown/Dropdown';
import { Cart } from '@/widgets/cart';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <UiHeader
      logo={<LogoUI />}
      dropDown={<DropdownUI />}
      cart={<Cart toggleDropdown={toggleDropdown} open={isOpen} />}
      toggleDropdown={toggleDropdown}
    />
  );
};
