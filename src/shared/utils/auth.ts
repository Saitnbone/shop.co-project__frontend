// Check if the user is authenticated by making a request to the backend
import { useQuery } from '@tanstack/react-query';

interface IUserData {
  id: string;
  login: string;
  email: string;
}

export const useAuth = () => {
  const { data, isLoading, isError, refetch } = useQuery<IUserData>({
    queryKey: ['getMe'],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users/me`, {
        method: 'GET',
        credentials: 'include',
      });
      if (!res.ok) throw new Error('Failed to fetch user data');
      return res.json();
    },
    refetchOnWindowFocus: true,
    retry: false,
    staleTime: 60 * 60 * 1000, // 1 hour
  });

  return {
    isAuthenticated: Boolean(data),
    loading: isLoading,
    error: isError,
    user: data,
    refetch,
  };
};
