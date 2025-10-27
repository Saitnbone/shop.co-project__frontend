import { useNavigate } from 'react-router-dom';
import { RiAccountCircleLine } from 'react-icons/ri';
import s from '../../styles.module.scss';

export const UiProfileIcon: React.FC = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <span onClick={handleProfileClick}>
      <RiAccountCircleLine className={s.profileIcon} />
    </span>
  );
};
