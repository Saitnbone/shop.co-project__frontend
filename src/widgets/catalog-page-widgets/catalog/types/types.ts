import { ComponentType } from 'react';
import { IProduct } from '../api/fetchProducts';

export type TCardTemplateProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
  price: number;
};

export interface TCatalogProps {
  products: IProduct[];
  CardTemplate: React.FC<{ item: IProduct }>;
  SortComponent: ComponentType; // Компонент, а не JSX элемент
}
