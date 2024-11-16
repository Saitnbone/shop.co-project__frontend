import '../shared/fonts';
import './styles/variables.scss';
import './styles/global.scss';
import { Header } from '@/widgets/header';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { SpecialOffer } from '@/features/special-offer';
import { Footer } from '@/widgets/footer';

function App() {
  return (
    <>
      <SpecialOffer />
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
