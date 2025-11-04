export interface IProduct {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
  price: number;
}

export type TTopSellingProps = {
  CardTemplate: React.FC<{ item: IProduct }>;
};
