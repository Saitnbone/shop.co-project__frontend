type TData = {
  username: string;
  email: string;
  password: string;
};

export const registerUser = async (data: TData) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/users/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.username,
          email: data.email,
          password: data.password,
        }),
        credentials: 'include',
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error registering user: ${error}`);
    throw error;
  }
};
