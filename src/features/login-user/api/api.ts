import type { TLogin } from '../types/types';

export const loginUser = async (data: TLogin) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/users/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email: data.login,
          password: data.password,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error sending form: ${error}`);
    throw error;
  }
};
