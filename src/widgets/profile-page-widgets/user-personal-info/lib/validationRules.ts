export const validationRules = {
  // Обязательное поле для заполнения
  required: (message = "Поле обязательное для заполнения") => ({
    validator: (value: string) => {
      return !value.trim() ? message : null;
    },
  }),

  // Минимальная длина поля
  minLength: (min: number, message?: string) => ({
    validator: (value: string) => {
      const actualMessage = message || `Минимум ${min} символов`;
      return value.trim().length < min ? actualMessage : null;
    },
  }),

  // Максимальная длина поля
  maxLength: (max: number, message?: string) => ({
    validator: (value: string) => {
      const actualMessage = message || `Максимум ${max} символов`;
      return value.trim().length > max ? actualMessage : null;
    },
  }),

  // Email валидация
  // email: (message = "Введите корректный email") => ({
  //   validator: (value: string) => {
  //     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //     return !emailRegex.test(value.trim()) ? message : null;
  //   },
  // }),
  email: (message = "Введите корректный email") => ({
    validator: (value: string) => {
      const trimmed = value.trim();
      if (!trimmed) return null;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return !emailRegex.test(trimmed) ? message : null;
    },
  }),

  // Имя (кириллица и латиница)
  name: (message = "Имя может содержать только буквы, пробелы и дефисы") => ({
    validator: (value: string) => {
      const nameRegex = /^[а-яёА-ЯЁa-zA-Z\s-]+$/;
      return !nameRegex.test(value.trim()) ? message : null;
    },
  }),

  // Telegram username
  telegram: (_message = "Неверный формат Telegram username") => ({
    validator: (value: string) => {
      let username = value.trim();

      // Удаляем @ если есть в начале
      if (username.startsWith("@")) {
        username = username.slice(1);
      }

      // базовый формат
      if (!/^[a-zA-Z0-9][a-zA-Z0-9_]{4,31}$/.test(username)) {
        return "Неверный формат Telegram username";
      }

      // не заканчивается на _
      if (username.endsWith("_")) {
        return "Username не может заканчиваться на подчеркивание";
      }

      // нет двойных подчеркиваний
      if (username.includes("__")) {
        return "Username не может содержать двойные подчеркивания";
      }

      return null;
    },
  }),

  // Кастомное правило
  custom: (validator: (value: string) => string | null) => ({
    validator,
  }),
};
