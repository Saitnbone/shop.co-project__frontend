import { ChangeEventHandler, ReactNode } from 'react';

export type TInput = {
  type: 'text' | 'email';
  placeholder: string;
  className: string;
  icon: ReactNode;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
