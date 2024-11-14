import s from './style.module.scss';
import { TFullBg } from '@/shared/ui/fullBg/types.ts';
import clsx from 'clsx';

export const FullBg: React.FC<TFullBg> = ({
  children,
  className,
  onAnimationEnd,
}) => {
  return (
    <div className={clsx(s.fullBg, className)} onAnimationEnd={onAnimationEnd}>
      {children}
    </div>
  );
};
