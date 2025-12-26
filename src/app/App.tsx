import '../shared/fonts';
import './styles/variables.scss';
import './styles/global.scss';
import { useEffect } from 'react';
import { Header } from '@/widgets/header';
import { Outlet } from 'react-router-dom';
import { SpecialOffer } from '@/widgets/special-offer';
import { Footer } from '@/widgets/footer';
import { fetchUserInfo } from '@/shared/slice/userSlice';
import { useAppDispatch } from '@/shared/utils/useAppDispatch';
import { NotificationModal } from '@/shared/ui/notification-modal';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  return (
    <>
      <SpecialOffer />
      <NotificationModal />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
