import { TCatalogProps } from '../types/types';
import s from './styles.module.scss';

export const UiCatalog = ({
  products,
  CardTemplate, 
  SortComponent,
}: TCatalogProps) => {

  if (products)
    return (
      <div className={s.catalog}>
        <div className={s.catalogHeader}>
          <h2 className={s.catalogTitle}>Casual</h2>
          <SortComponent />
        </div>
        <div className={s.catalogContent}>
          {products.map((product) => (
            <CardTemplate key={product.id} item={product} />
          ))}
        </div>
      </div>
    );
};