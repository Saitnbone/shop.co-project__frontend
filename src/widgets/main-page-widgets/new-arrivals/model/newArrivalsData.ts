export type TNewArrivalsItem = {
  id: string;
  name: string; // <-- измени title на name
  description: string;
  image: string; // <-- измени imageUrl на image
  raiting: number; // <-- измени rating на raiting
  price: number;
  quantity: number;
  categoryId: string;
  createdAt: string;
  category: {
    id: string;
    name: string;
  };
};
