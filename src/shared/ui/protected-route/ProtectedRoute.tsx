import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '@/shared/utils/auth'; // Импортируй из utils

export const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};
