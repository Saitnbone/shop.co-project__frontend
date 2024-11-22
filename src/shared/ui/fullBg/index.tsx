import s from './styles.module.scss';
import clsx from 'clsx';
import { TFullBg } from '@ui/fullBg/types.ts';

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
