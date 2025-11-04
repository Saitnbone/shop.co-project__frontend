import { PiShoppingCartSimpleBold } from 'react-icons/pi';
import { IIconsBlock } from '@/widgets/header/types';
import s from '../../styles.module.scss';

export const UiCartIcon: React.FC<IIconsBlock> = ({ toggleDropdown }) => {
  return (
    <span onClick={toggleDropdown}>
      <PiShoppingCartSimpleBold className={s.cartIcon} />
    </span>
  );
};
