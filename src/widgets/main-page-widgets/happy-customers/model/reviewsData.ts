export type TReviewItem = {
  createdAt: string;
  description: string;
  id: string;
  product: {
    id: string;
    name: string;
    categoryId: string;
    createdAt: string;
    description: string;
    price: string;
    rating: number;
  };
  userId: string;
  userName: string;
};
