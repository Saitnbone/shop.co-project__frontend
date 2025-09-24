// src/widgets/catalog-page-widgets/catalog/api/fetchProducts.ts
// Функция для запроса отфильтрованных товаров
// import { IFiltersState } from '../../store/filtersSlice'; // Путь к твоему слайсу

// export const fetchProducts = async (filters: IFiltersState) => {
//   const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001'; // Переменная окружения
//   const params = new URLSearchParams();

//   // Добавляем фильтры как query-параметры
//   if (filters.category.length) params.append('category', filters.category.join(','));
//   if (filters.colors.length) params.append('colors', filters.colors.join(','));
//   if (filters.sizes.length) params.append('sizes', filters.sizes.join(','));
//   if (filters.dressType.length) params.append('dressType', filters.dressType.join(','));

//   params.append('price_min', filters.priceRange[0].toString());
//   params.append('price_max', filters.priceRange[1].toString());

//   // Отправляем GET-запрос
//   const response = await fetch(`${baseUrl}/api/products?${params}`);

//   if (!response.ok) {
//     throw new Error('Failed to fetch products'); // TanStack Query обработает ошибку
//   }

//   return response.json(); // Возвращаем данные (массив товаров)
// };

// хук танстака
// src/widgets/catalog-page-widgets/catalog/hooks/useProducts.ts
// import { useQuery } from '@tanstack/react-query';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../../../app/store'; // Путь к твоему store
// import { fetchProducts } from '../api/fetchProducts';

// export const useProducts = () => {
//   const filters = useSelector((state: RootState) => state.filters);

//   return useQuery({
//     queryKey: ['products'], // Ключ запроса (без фильтров, так как запрос по кнопке)
//     queryFn: () => fetchProducts(filters),
//     enabled: false, // Не запрашивать автоматически
//     staleTime: 5 * 60 * 1000, // Кэш на 5 минут
//     retry: 1, // Повторить 1 раз при ошибке
//   });
// };


// Пример реализации
// src/widgets/catalog-page-widgets/catalog/ui/Layout.tsx
// import { useProducts } from '../hooks/useProducts';
// import { useDispatch } from 'react-redux';
// import { setColors } from '../../store/filtersSlice'; // Путь к действиям

// export const UiCatalog = ({ CardTemplate }: TCatalogProps) => {
//   const dispatch = useDispatch();
//   const { data: products, isLoading, error, refetch } = useProducts();

//   const handleApplyFilters = () => {
//     refetch(); // Ручной запрос с текущими фильтрами
//   };

//   const handleColorChange = (colors: string[]) => {
//     dispatch(setColors(colors)); // Обновляем фильтры в Redux (без запроса)
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div className={s.catalog}>
//       <h2>Catalog</h2>
//       {/* Фильтры */}
//       <button onClick={() => handleColorChange(['red'])}>Red</button>
//       <button onClick={handleApplyFilters}>Apply Filters</button>

//       {/* Товары */}
//       <div className={s.catalogContent}>
//         {products?.map((item) => (
//           <CardTemplate key={item.id} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };