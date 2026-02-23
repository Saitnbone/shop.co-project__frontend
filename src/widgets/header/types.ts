import { ReactNode } from 'react';

export interface IIconsBlock {
  toggleDropdown: () => void;
}

export interface IUiHeader extends IIconsBlock {
  logo: ReactNode;
  dropDown: ReactNode;
  cart: ReactNode;
}

export type TUiMenu = {
  dropDown: ReactNode;
};
