import { UiCatalog } from '../ui/Layout';
import { CatalogSort } from '@/features/catalog-filters/sort-catalog';
import { CardTemplate } from '@/shared/ui/card-template';

export const Catalog = () => {
  return <UiCatalog CardTemplate={CardTemplate} SortComponent={CatalogSort} />;
};
