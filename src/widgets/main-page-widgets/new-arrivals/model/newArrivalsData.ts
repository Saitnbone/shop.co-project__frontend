export type TNewArrivalsItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  rating: number;
  categoryId: string;
  createdAt: string;
  category: {
    id: string;
    name: string;
  }; 
};