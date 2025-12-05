export interface IProduct {
  id: string;
  title: string;
  description: string;
  imageUrl: string;

  raiting: number;
  price: number;
}

export type TNewArrivalsProps = {
  CardTemplate: React.FC<{ item: IProduct }>;
};
