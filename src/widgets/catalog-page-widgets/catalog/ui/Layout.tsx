// src/widgets/catalog-page-widgets/catalog/ui/Layout.tsx
import { useRef, useState } from 'react';
import { TCatalogProps } from '../types/types';
import s from './styles.module.scss';

export const UiCatalog = ({
  products,
  CardTemplate,
  SortComponent,
}: TCatalogProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const catalogRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 9;

  if (!products) return null;

  // Вычисляем общее количество страниц
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Получаем товары для текущей страницы
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  // Функции для переключения страниц
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);

      // Скролл к верху каталога при смене страницы
      catalogRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToPrevious = () => goToPage(currentPage - 1);
  const goToNext = () => goToPage(currentPage + 1);

  return (
    <div ref={catalogRef} className={s.catalog}>
      <div className={s.catalogHeader}>
        <h2 className={s.catalogTitle}>Casual</h2>
        <SortComponent />
      </div>
      <div className={s.catalogContent}>
        {currentProducts.map((product) => (
          <CardTemplate key={product.id} item={product} />
        ))}
      </div>
      {/* Пагинатор */}
      <div className={s.pagination}>
        <button
          onClick={goToPrevious}
          disabled={currentPage === 1}
          className={s.paginationButton}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={`${s.paginationButton} ${
              currentPage === index + 1 ? s.active : ''
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          className={s.paginationButton}
        >
          Next
        </button>
      </div>
    </div>
  );
};
