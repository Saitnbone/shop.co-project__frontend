import s from './styles.module.scss';
import { IUiHeader } from '../types';
import { UiMenu } from './components/menu/Menu';
import { UiBurgerIcon } from './components/icons-block/BurgerIcon';
import { UiIconsBlock } from './components/icons-block/IconsBlock';
import { UiSearchInput } from '@/widgets/header/ui/components/search-input/SearchInput.tsx';

export const UiHeader: React.FC<IUiHeader> = ({
  logo,
  dropDown,
  cart,
  toggleDropdown,
}) => {
  return (
    <header className={s.header}>
      <div className={s.headerBlock}>
        <div className={s.headerContent}>
          <UiBurgerIcon />
          {logo}
        </div>
        <UiMenu dropDown={dropDown} />
        <UiSearchInput />
        <UiIconsBlock toggleDropdown={toggleDropdown} />
      </div>
      {cart}
    </header>
  );
};
