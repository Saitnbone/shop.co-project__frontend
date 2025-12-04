export const getTopComments = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/comments/top-comments`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching top comments:', error);
    throw error;
  }
};
