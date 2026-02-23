import { Link } from 'react-router-dom';
import { TUiMenu } from '@/widgets/header/types';
import s from '../../styles.module.scss';

export const UiMenu: React.FC<TUiMenu> = ({ dropDown }) => {
  return (
    <nav className={s.headerNav}>
      <ul className={s.menu}>
        <li>{dropDown}</li>
        <li>
          <Link to="/catalog">On Sale</Link>
        </li>
        <li>
          <Link to="/catalog">New Arrivals</Link>
        </li>
        <li>
          <Link to="/brands">Brands</Link>
        </li>
      </ul>
    </nav>
  );
};
