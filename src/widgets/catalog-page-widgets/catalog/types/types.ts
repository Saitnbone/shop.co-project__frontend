import { ComponentType } from 'react';

export type TCardTemplateProps = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
  price: number;
};

export type TCatalogProps = {
  CardTemplate: ComponentType<{ item: TCardTemplateProps }>;
  SortComponent: ComponentType;
};
