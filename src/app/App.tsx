import '../shared/fonts';
import './styles/variables.scss';
import './styles/global.scss';
import { Header } from '@/widgets/header';
import { Outlet } from 'react-router-dom';
import { SpecialOffer } from '@/widgets/special-offer';
import { Footer } from '@/widgets/footer';

function App() {
  return (
    <>
      <SpecialOffer />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
