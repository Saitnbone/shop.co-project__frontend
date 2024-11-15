import clsx from 'clsx';
import { textColor, TTitle } from '@/shared/ui/title/types.ts';
import { useMemo } from 'react';
import s from './styles.module.scss';

export const Title = ({
  as: Tag,
  children,
  className,
  color,
}: TTitle): JSX.Element => {
  const colorClass = useMemo(() => {
    switch (color) {
      case textColor.primary:
        return s.colorPrimary;
      case textColor.secondary:
        return s.colorSecondary;
      default:
        return null;
    }
  }, [color]);

  // Добавляем CSS-класс в зависимости от уровня заголовка
  const tagClass = useMemo(() => {
    switch (Tag) {
      case 'h1':
        return s.h1;
      case 'h2':
        return s.h2;
      case 'h3':
        return s.h3;
      case 'h4':
        return s.h4;
      default:
        return null;
    }
  }, [Tag]);

  return (
    <Tag className={clsx(s.title, tagClass, colorClass, className)}>
      {children}
    </Tag>
  );
};
