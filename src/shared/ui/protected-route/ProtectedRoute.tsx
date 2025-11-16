import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/shared/utils/auth';

export const ProtectedRoute = () => {
  const { isAuthenticated, loading, error } = useAuth();

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh',
        }}
      >
        Loading...
      </div>
    );
  }

  if (error) {
    return <Navigate to="/login" replace />;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};
