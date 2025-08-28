import { FC } from 'react';
import s from './styles.module.scss';
import { TCatalogPageProps } from '../types/types';

export const UiCatalogPage: FC<TCatalogPageProps> = ({ filters, catalog }) => {
  return (
    <main className={s.catalog}>
      {filters} {catalog}
    </main>
  );
};
