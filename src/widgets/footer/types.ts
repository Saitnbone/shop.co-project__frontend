import { ReactNode } from 'react';

export type TUiFooter = {
  logo: ReactNode;
};

export interface FooterLink {
  name: string;
  url: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
  className: string;
}
