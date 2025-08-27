import { FC } from 'react';
import { TCatalogPageProps } from '../types/types';

export const UiCatalogPage: FC<TCatalogPageProps> = ({ filters, catalog }) => {
  return (
    <main className="catalog">
      {filters} {catalog}
    </main>
  );
};
