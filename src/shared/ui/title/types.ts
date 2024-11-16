import { ReactNode } from 'react';

export type TTitle = {
  as: string;
  children: ReactNode;
  className: string;
  color: textColor;
};

export enum textColor {
  primary = 'primary',
  secondary = 'seconadry',
}
