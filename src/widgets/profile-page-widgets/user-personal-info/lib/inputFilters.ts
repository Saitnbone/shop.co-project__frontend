export const inputFilters = {
  // Фильтр для имени
  nameFilter: (value: string): string => {
    return value.replace(/[^а-яёА-ЯЁa-zA-Z\s-]/g, "");
  },

  // Фильтр для Telegram
  telegramFilter: (value: string): string => {
    if (value && !value.startsWith("@")) {
      value = "@" + value;
    }

    if (value.startsWith("@")) {
      const username = value.slice(1);
      const filteredUsername = username.replace(/[^a-zA-Z0-9_]/g, "");
      return "@" + filteredUsername;
    }

    return value;
  },

  // Фильтр для email (приведение к нижнему регистру)
  emailFilter: (value: string): string => {
    return value.toLowerCase().trim();
  },
};
