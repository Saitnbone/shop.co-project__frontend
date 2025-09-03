import { TCatalogProps, TCardTemplateProps } from '../types/types';
import { data } from '../model/data';
import s from './styles.module.scss';

export const UiCatalog = ({ CardTemplate, SortComponent }: TCatalogProps) => {
  const items = data as TCardTemplateProps[];

  return (
    <div className={s.catalog}>
      <div className={s.catalogHeader}>
        <h2 className={s.catalogTitle}>Casual</h2>
        <SortComponent />
      </div>
      <div className={s.catalogContent}>
        {items.map((item) => (
          <CardTemplate key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
