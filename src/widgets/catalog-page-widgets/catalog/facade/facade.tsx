import { UiCatalog } from '../ui/Layout';
import { CatalogSort } from '@/features/catalog-filters/sort-catalog';
import { CardTemplate } from '@/shared/ui/card-template';
import { data } from '../model/data';
// import { useProducts } from '../api/hook';

export const Catalog = () => {
  // const { data, isLoading, error } = useProducts();

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error</div>;
  // if (!data) return <div>No products found</div>;

  return (
    <UiCatalog
      products={data}
      CardTemplate={CardTemplate}
      SortComponent={CatalogSort}
    />
  );
};