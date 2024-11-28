import logo from '../../assets/logo.svg';

export const LogoUI: React.FC = () => {
  return (
    <>
      <img loading="lazy" src={logo} alt="Logo" />
    </>
  );
};
