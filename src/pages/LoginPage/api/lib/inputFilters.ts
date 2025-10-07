export const inputFilters = {
  // Фильтр для поля пароля
  passwordFilter: (value: string): string => {
    return value.toLowerCase().trim();
  },

  // Фильтр для email (приведение к нижнему регистру)
  emailFilter: (value: string): string => {
    return value.toLowerCase().trim();
  },
};
