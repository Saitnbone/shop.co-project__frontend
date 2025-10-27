import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import s from './styles.module.scss';

export const LogoUI: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className={s.logoContainer}>
      <img loading="lazy" src={logo} alt="Logo" onClick={handleLogoClick} />
    </div>
  );
};
