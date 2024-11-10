import s from './styles.module.scss';
import { TUiMenu } from '@/widgets/header/types';
// import {DropdownUI} from "../../../../../shared/ui/dropdown/Dropdown.tsx";

export const UiMenu: React.FC<TUiMenu> = ({ dropDown }) => {
  return (
    <nav>
      <ul className={s.menu}>
        <li>{dropDown}</li>
        <li>
          <a href="#" target="_blank">
            On Sale
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            New Arrivals
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Brands
          </a>
        </li>
      </ul>
    </nav>
  );
};
