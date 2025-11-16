export const logoutUser = async () => {
  await fetch(`${import.meta.env.VITE_API_URL}/users/logout`, {
    method: 'POST',
    credentials: 'include',
  });
};
