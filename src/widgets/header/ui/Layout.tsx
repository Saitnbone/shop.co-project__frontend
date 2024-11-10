import s from './styles.module.scss';
import { TUiHeader } from '../types';
import { UiMenu } from './components/menu/Menu';

export const UiHeader: React.FC<TUiHeader> = ({ logo, dropDown }) => {
  return (
    <header className={s.header}>
      <div>{logo}</div>
      <UiMenu dropDown={dropDown} />
    </header>
  );
};
