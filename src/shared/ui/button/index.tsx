import { useMemo } from 'react';
import { ButtonColor, ButtonProps } from './types';

import s from './style.module.scss';
import clsx from 'clsx';

export const Button = ({
  type,
  color,
  rounded,
  disabled,
  onClick,
  children,
  className,
}: ButtonProps): JSX.Element => {
  const colorClass = useMemo(() => {
    switch (color) {
      case ButtonColor.primary:
        return s.colorPrimary;
      case ButtonColor.secondary:
        return s.colorSecondary;
      case ButtonColor.outline:
        return s.colorOutline;
      case ButtonColor.icon:
        return s.colorIcon;
    }
  }, [color]);

  return (
    <button
      className={clsx(s.button, className, colorClass, rounded && s.rounded)}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
