import { ComponentType } from 'react';
import { IProduct } from '../api/fetchProducts';

export type TCardTemplateProps = {
  id: string;
  name: string;
  description: string;
  image: string;
  raiting: number;
  price: number;
};

export interface TCatalogProps {
  products: IProduct[];
  CardTemplate: React.FC<{ item: IProduct }>;
  SortComponent: ComponentType; // Компонент, а не JSX элемент
}
