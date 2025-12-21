export interface IProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  raiting: number;
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
