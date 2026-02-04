import { useState } from 'react';
import { UiHeader } from '../ui/Layout';
import { LogoUI } from '@/shared/ui/logo';
import { DropdownUI } from '@/shared/ui/dropdown/Dropdown';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/providers/store';
import { getCartData } from '@/features/show-cart/api/api';
import { Cart } from '@/widgets/cart';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const userId = useSelector((state: RootState) => state.userInfo.userInfo?.id);

  // @TODO: Добавить логику получения данных корзины
  const toggleDropdown = async () => {
    try {
      setIsOpen(!isOpen);
      await getCartData(userId!);
    } catch (error) {
      console.error('Error toggling dropdown:', error);
      throw error;
    }
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
