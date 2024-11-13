import { ReactNode } from 'react';

export type ButtonProps = {
  type?: ButtonType;
  color: ButtonColor;
  rounded?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
};

export enum ButtonType {
  button = 'button',
  submit = 'submit',
}

export enum ButtonColor {
  primary = 'primary',
  secondary = 'secondary',
  outline = 'outline',
  icon = 'icon',
}

// export enum IconType {
//   cross = 'cross',
//   find = 'find',
//   basket = 'basket',
//   profile = 'profile',
//   twitter = 'twitter',
//   facebook = 'facebook',
//   instagram = 'instagram',
//   github = 'github',
//   delete = 'delete',
//   arrow = 'arrow',
// }
