export interface IProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  raiting: number;
  price: number;
}

export type TTopSellingProps = {
  CardTemplate: React.FC<{ item: IProduct }>;
};

export type TTopSellingItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  raiting: number;
  price: number;
};
