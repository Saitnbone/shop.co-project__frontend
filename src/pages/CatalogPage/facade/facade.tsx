import { FC } from 'react';
import { UiCatalogPage } from '../ui/Layout';
import { CatalogFilters } from '@/widgets/catalog-page-widgets/filters';
import { Catalog } from '@/widgets/catalog-page-widgets/catalog';

export const CatalogPage: FC = () => {
  return <UiCatalogPage filters={<CatalogFilters />} catalog={<Catalog />} />;
};
