import { AnimationEventHandler, ReactNode } from 'react';

export type TFullBg = {
  children: ReactNode;
  className: string;
  onAnimationEnd?: AnimationEventHandler;
};
