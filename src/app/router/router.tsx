import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { MainPage, BrandsPage, CatalogPage } from '@/pages/index';
import App from '@/app/App';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Общие страницы */}
      <Route index element={<MainPage />} />
      <Route path="brands" element={<BrandsPage />} />
      <Route path='catalog' element={<CatalogPage />} />

      {/* Защищенные страницы */}
      {/* <Route path="profile" element={<ProfilePage />} />
      <Route path="settings" element={<SettingsPage />} /> */}

      {/* 404 */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Route>
  )
);
