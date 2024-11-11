import s from './styles.module.scss';
import { TUiHeader } from '../types';
import { UiMenu } from './components/menu/Menu';
import { UiIconsBlock } from './components/icons-block/IconsBlock';

export const UiHeader: React.FC<TUiHeader> = ({ logo, dropDown }) => {
  return (
    <header className={s.header}>
      <div className={s.headerBlock}>
        {logo}
        <UiMenu dropDown={dropDown} />
        <UiIconsBlock />
      </div>
    </header>
  );
};
