import { FC } from 'react';
import { FilterProductType } from '@/features/catalog-filters/filter-product-type';
import { FilterPrices } from '@/features/catalog-filters/filter-prices';
import { FilterColors } from '@/features/catalog-filters/filter-colors';
import { FilterSizes } from '@/features/catalog-filters/filter-sizes';
import { FilterDressStyle } from '@/features/catalog-filters/filter-dress-styles';
import { UiCatalogFilters } from '../ui/Layout';
import { TFilterProps } from '../types/types';

export const CatalogFilters: FC<TFilterProps> = () => {
  return (
    <UiCatalogFilters
      filteredProductTypes={<FilterProductType />}
      filterPrices={<FilterPrices />}
      filterColors={<FilterColors />}
      filterSizes={<FilterSizes />}
      filterDressStyles={<FilterDressStyle />}
    />
  );
};
