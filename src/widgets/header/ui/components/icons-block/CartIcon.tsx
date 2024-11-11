import { PiShoppingCartSimpleBold } from 'react-icons/pi';
import s from '../../styles.module.scss';

export const UiCartIcon: React.FC = () => {
  return (
    <span >
      <PiShoppingCartSimpleBold className={s.cartIcon}/>
    </span>
  );
};
