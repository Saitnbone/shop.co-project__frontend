import { ReactNode } from 'react';

export type TUiFooter = {
  logo: ReactNode;
};

export interface IFooterLink {
  name: string;
  url: string;
}

export interface IFooterLinkGroup {
  title: string;
  links: IFooterLink[];
  className: string;
}
