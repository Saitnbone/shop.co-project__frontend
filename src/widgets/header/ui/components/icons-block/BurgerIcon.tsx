import { RxHamburgerMenu } from 'react-icons/rx';
import s from '../../styles.module.scss';

export const UiBurgerIcon = () => {
  return (
    <span>
      <RxHamburgerMenu className={s.burgerIcon}/>
    </span>
  );
};
