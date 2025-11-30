export interface IProduct {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
  price: number;
}

export interface IUserInfo {
  id: string;
  name: string;
  email: string;
  telegram?: string;
  phoneNumber?: string;
  address?: string;
  // avatarImg?: string;
} 
