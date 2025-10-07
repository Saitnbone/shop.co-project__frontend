import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import {
  MainPage,
  BrandsPage,
  CatalogPage,
  CardPage,
  CartPage,
  ProfilePage,
  NotFoundPage,
  AuthPage,
} from '@/pages/index';
import App from '@/app/App';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Общие страницы */}
      <Route index element={<MainPage />} />
      <Route path="brands" element={<BrandsPage />} />
      <Route path="catalog" element={<CatalogPage />} />
      <Route path="catalog/cardId" element={<CardPage />} />
      <Route path="cart" element={<CartPage />} />

      {/* Защищенные страницы профиля */}
      <Route path="login" element={<AuthPage />} />
      <Route path="profile" element={<ProfilePage />} />
      {/* <Route path="settings" element={<SettingsPage />} /> */}

      {/* 404 - для прочих роутов которые не подключены к роутингу */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
