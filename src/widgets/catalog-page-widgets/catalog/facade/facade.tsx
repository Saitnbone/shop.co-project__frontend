import { UiCatalog } from '../ui/Layout';
import { CatalogSort } from '@/features/catalog-filters/sort-catalog';
import { CardTemplate } from '@/shared/ui/card-template';
import { data } from '../model/data';

export const Catalog = () => {
  return (
    <UiCatalog
      products={data}
      CardTemplate={CardTemplate}
      SortComponent={CatalogSort}
    />
  );
};
