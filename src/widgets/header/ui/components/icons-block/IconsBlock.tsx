import s from '../../styles.module.scss';
import { UiCartIcon } from './CartIcon';
import { UiProfileIcon } from './ProfileIcon';

export const UiIconsBlock: React.FC = () => {
  return (
    <div className={s.iconsBlock}>
      <UiCartIcon />
      <UiProfileIcon />
    </div>
  );
};
