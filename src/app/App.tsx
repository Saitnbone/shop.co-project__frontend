import '../shared/fonts';
import './styles/variables.scss';
import './styles/global.scss';
import { Header } from '@/widgets/header';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { SpecialOffer } from '@/widgets/special-offer';
import { Footer } from '@/widgets/footer';
// import { Subscribe } from '@/features/subscribe';

function App() {
  return (
    <>
      <SpecialOffer />
      <Header />
      <RouterProvider router={router} />
      {/* <Subscribe /> */}
      <Footer />
    </>
  );
}

export default App;
