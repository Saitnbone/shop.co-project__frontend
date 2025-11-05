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
import { ProtectedRoute } from '@/shared/ui/protected-route/ProtectedRoute';
import App from '@/app/App';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Публичные роуты (без авторизации) */}
      <Route index element={<MainPage />} />
      <Route path="brands" element={<BrandsPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="catalog" element={<CatalogPage />} />
      <Route path="catalog/:cardId" element={<CardPage />} />
      <Route path="login" element={<AuthPage />} />

      {/* Защищенные страницы профиля */}
      {/* <Route path="login" element={<AuthPage />} /> */}
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="profile" element={<ProfilePage />} />
        {/* <Route path="settings" element={<SettingsPage />} /> */}
      </Route>

      {/* 404 - для прочих роутов которые не подключены к роутингу */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
