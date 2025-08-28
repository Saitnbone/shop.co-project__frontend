import { FC } from 'react';
import { FilterProductType } from '@/features/catalog-filters/filter-product-type';
import { UiCatalogFilters } from '../ui/Layout';
import { TFilterProps } from '../types/types';

export const CatalogFilters: FC<TFilterProps> = () => {
  return <UiCatalogFilters filteredProductTypes={<FilterProductType />} />;
};
