// composables/useFormValidation.ts
// export interface ValidationRule {
//   validator: (value: string) => string | null;
//   message?: string;
// }

// export interface ValidationSchema {
//   [key: string]: ValidationRule[];
// }

// export function useFormValidation<T extends Record<string, any>>(
//   initialForm: T,
//   schema: ValidationSchema
// ) {
//   // const form = reactive({ ...initialForm });
//   const form = ref({ ...initialForm }) as Ref<T>;
//   const touched = ref<Record<string, boolean>>({});
//   const errors = ref<Record<string, string>>({});

//   // Валидация одного поля
//   const validateField = (field: keyof T): string => {
//     const value = String(form.value[field] || '');
//     const rules = schema[field as string] || [];

//     for (const rule of rules) {
//       const error = rule.validator(value);
//       if (error) {
//         return error;
//       }
//     }
//     return '';
//   };

//   // Валидация всей формы
//   const validateForm = (): boolean => {
//     let isValid = true;

//     Object.keys(schema).forEach((field) => {
//       const error = validateField(field as keyof T);
//       errors.value[field] = error;
//       touched.value[field] = true;
//       if (error) isValid = false;
//     });

//     return isValid;
//   };

//   // Обработка изменения поля
//   const handleFieldChange = (field: keyof T, value: any) => {
//     form.value[field] = value;
//     if (touched.value[field as string]) {
//       errors.value[field as string] = validateField(field);
//     }
//   };

//   // Обработка потери фокуса
//   const handleFieldBlur = (field: keyof T) => {
//     touched.value[field as string] = true;
//     errors.value[field as string] = validateField(field);
//   };

//   // Вычисляемые свойства
//   const isFieldValid = (field: keyof T) =>
//     computed(
//       () =>
//         !errors.value[field as string] &&
//         form.value[field] &&
//         String(form.value[field]).trim()
//     );

//   const isFormValid = computed(() =>
//     Object.keys(schema).every(
//       (field) =>
//         !validateField(field as keyof T) && form.value[field as keyof T]
//     )
//   );

//   // Сброс формы
//   const resetForm = () => {
//     Object.keys(initialForm).forEach((key) => {
//       const typedKey = key as keyof T;
//       (form as any)[typedKey] = initialForm[typedKey];
//       (touched as any)[typedKey] = false;
//       (errors as any)[typedKey] = '';
//     });
//   };

//   return {
//     form,
//     touched,
//     errors,
//     validateField,
//     validateForm,
//     handleFieldChange,
//     handleFieldBlur,
//     isFieldValid,
//     isFormValid,
//     resetForm,
//   };
// }
