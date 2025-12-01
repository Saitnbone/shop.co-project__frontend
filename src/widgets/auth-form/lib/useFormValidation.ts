import { useState, useCallback, useMemo } from "react";
import { validationRules } from "./validationRules";

export interface ValidationRule {
  validator: (value: string) => string | null;
  message?: string;
}

export interface ValidationSchema {
  [key: string]: ValidationRule[];
}

export function useFormValidation<T extends Record<string, string>>(
  initialForm: T,
  schema: ValidationSchema
) {
  const [form, setForm] = useState<T>(initialForm);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Валидация одного поля
  const validateField = useCallback(
    (field: keyof T): string => {
      const value = String(form[field] || "");
      const rules = schema[field as string] || [];
      for (const rule of rules) {
        const error = rule.validator(value);
        if (error) return error;
      }
      return "";
    },
    [form, schema]
  );

  // Валидация всей формы
  const validateForm = useCallback((): boolean => {
    let isValid = true;
    const newErrors: Record<string, string> = {};
    const newTouched: Record<string, boolean> = {};

    Object.keys(schema).forEach((field) => {
      const error = validateField(field as keyof T);
      newErrors[field] = error;
      newTouched[field] = true;
      if (error) isValid = false;
    });

    setErrors(newErrors);
    setTouched(newTouched);

    return isValid;
  }, [schema, validateField]);

  // Обработка изменения поля
  const handleFieldChange = useCallback(
    (field: keyof T, value: T[keyof T]) => {
      setForm((prev) => ({ ...prev, [field]: value }));
      if (touched[field as string]) {
        setErrors((prev) => ({
          ...prev,
          [field]: validateField(field),
        }));
      }
    },
    [touched, validateField]
  );

  // Обработка потери фокуса
  const handleFieldBlur = useCallback(
    (field: keyof T) => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      setErrors((prev) => ({
        ...prev,
        [field]: validateField(field),
      }));
    },
    [validateField]
  );

  // Проверка валидности поля
  const isFieldValid = useCallback(
    (field: keyof T) =>
      !errors[field as string] && form[field] && String(form[field]).trim(),
    [errors, form]
  );

  // Проверка валидности всей формы
  // const isFormValid = useMemo(
  //   () =>
  //     Object.keys(schema).every(
  //       (field) => !validateField(field as keyof T) && form[field as keyof T]
  //     ),
  //   [schema, form, validateField]
  // );

const isFormValid = useMemo(() => {
  return Object.keys(schema).every((field) => {
    const value = form[field as keyof T];
    const error = validateField(field as keyof T);

    const isRequired = schema[field].some(
      (rule) => rule.validator === validationRules.required().validator
    );
    if (!isRequired && !value) return true;

    return !error && value;
  });
}, [form, schema, validateField]);

  // Сброс формы
  const resetForm = useCallback(() => {
    setForm(initialForm);
    setTouched({});
    setErrors({});
  }, [initialForm]);

  return {
    form,
    touched,
    errors,
    validateField,
    validateForm,
    handleFieldChange,
    handleFieldBlur,
    isFieldValid,
    isFormValid,
    resetForm,
    setForm,
  };
}
