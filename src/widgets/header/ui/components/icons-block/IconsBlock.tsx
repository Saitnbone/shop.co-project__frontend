import s from '../../styles.module.scss';
import { UiCartIcon } from './CartIcon';
import { UiProfileIcon } from './ProfileIcon';
import { UiMobileSearchIcon } from './MobileSearchIcon';

export const UiIconsBlock: React.FC = () => {
  return (
    <div className={s.iconsBlock}>
      <UiMobileSearchIcon />
      <UiCartIcon />
      <UiProfileIcon />
    </div>
  );
};
