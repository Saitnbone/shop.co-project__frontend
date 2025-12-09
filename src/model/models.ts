export type TComment = {
  createdAt: string;
  description: string;
  id: string;
  rating: number;
  userName: string;
};

export type TProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  raiting: number;
};

export type TCategory = {
  id: string;
  name: string;
};

export type TProductVariant = {
  id: string;
  quantity: number;
  color: TColor;
  size: TSize;
};

export type TSize = {
  id: string;
  name: string;
};

export type TColor = {
  id: string;
  name: string;
  hex: string;
};

export interface TProductDetails {
  product: TProduct;
  comments: TComment[];
  category: TCategory;
  variants: TProductVariant[];
}

export type TProductResponse = {
  product: TProductDetails;
};
