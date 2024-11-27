import { RiAccountCircleLine } from 'react-icons/ri';
import s from '../../styles.module.scss';

export const UiProfileIcon: React.FC = () => {
  return (
    <span>
      <RiAccountCircleLine className={s.profileIcon} />
    </span>
  );
};
