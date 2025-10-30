import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';


export const LogoUI: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div >
      <img loading="lazy" src={logo} alt="Logo" onClick={handleLogoClick} />
    </div>
  );
};
