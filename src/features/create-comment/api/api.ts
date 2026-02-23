export interface ICreateCommentData {
  userName: string;
  rating: number;
  description: string;
  productId: string;
}

export const createComment = async (data: ICreateCommentData) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/comments/create-comment`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) {
      throw new Error('Failed to create comment');
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating comment:', error);
    throw error;
  }
};
