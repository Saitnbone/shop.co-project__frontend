import s from '../../styles.module.scss';
import { UiCartIcon } from './CartIcon';
import { IIconsBlock } from '@/widgets/header/types';
import { UiProfileIcon } from './ProfileIcon';
import { UiMobileSearchIcon } from './MobileSearchIcon';

export const UiIconsBlock: React.FC<IIconsBlock> = ({ toggleDropdown }) => {
  return (
    <div className={s.iconsBlock}>
      <UiMobileSearchIcon />
      <UiCartIcon toggleDropdown={toggleDropdown} />
      <UiProfileIcon />
    </div>
  );
};
