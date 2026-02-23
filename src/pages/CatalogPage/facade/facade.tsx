import { FC } from 'react';
import { UiCatalogPage } from '../ui/Layout';
import { CatalogFilters } from '@/widgets/catalog-page-widgets/filters';
import { RootState } from '@/app/providers/store';
import { useSelector } from 'react-redux';
import { Catalog } from '@/widgets/catalog-page-widgets/catalog';

export const CatalogPage: FC = () => {
  const filters = useSelector((state: RootState) => state.filters);

  return (
    <UiCatalogPage
      filters={
        <CatalogFilters
          filteredProductTypes={filters.category}
          filterPrices={filters.priceRange}
          filterColors={filters.colors}
          filterSizes={filters.sizes}
          filterDressStyles={filters.dressType}
        />
      }
      catalog={<Catalog />}
    />
  );
};
