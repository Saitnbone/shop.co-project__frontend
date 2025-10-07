import { authUser } from '../api/api';
// import { validationRules } from '../api/lib/validationRules';
import s from './styles.module.scss';

{
  /* <script setup lang="ts">
import { ref } from "vue";
import { sendLeadForm } from "./api/api";
import { useFormValidation } from "./lib/useFormValidation";
import { validationRules } from "./lib/validationRules";
import { inputFilters } from "./lib/inputFilters";

interface LeadForm {
  name: string;
  telegram: string;
  email: string;
}

const initialForm: LeadForm = {
  name: "",
  telegram: "",
  email: "",
};

const validationSchema = {
  name: [
    validationRules.required(),
    validationRules.minLength(2),
    validationRules.maxLength(50),
    validationRules.name(),
  ],
  telegram: [
    validationRules.required("Telegram username обязателен"),
    validationRules.minLength(
      5,
      "Telegram username должен содержать минимум 5 символов"
    ),
    validationRules.maxLength(
      32,
      "Telegram username не должен превышать 32 символа"
    ),
    validationRules.telegram(),
  ],
  email: [
    validationRules.required("Email обязателен"),
    validationRules.email(),
  ],
};

// composable для валидации
const {
  form,
  touched,
  errors,
  validateForm,
  handleFieldChange,
  handleFieldBlur,
  // isFieldValid,
  isFormValid,
  resetForm,
} = useFormValidation(initialForm, validationSchema);

// Состояние отправки
const isLoading = ref(false);
const isSuccess = ref(false);
const error = ref<string | null>(null);

// Вычисляемые свойства для каждого поля
// const isNameValid = isFieldValid("name");
// const isTelegramValid = isFieldValid("telegram");
// const isEmailValid = isFieldValid("email");

// Обработчики с фильтрацией
const handleNameInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const filteredValue = inputFilters.nameFilter(target.value);
  target.value = filteredValue;
  handleFieldChange("name", filteredValue);
};

const handleTelegramInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const filteredValue = inputFilters.telegramFilter(target.value);
  target.value = filteredValue;
  handleFieldChange("telegram", filteredValue);
};

const handleEmailInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const filteredValue = inputFilters.emailFilter(target.value);
  handleFieldChange("email", filteredValue);
};

const submitForm = async () => {
  if (!validateForm()) {
    error.value = "Пожалуйста, исправьте ошибки в форме";
    return;
  }

  isLoading.value = true;
  error.value = null;

  try {
    await sendLeadForm({
      name: form.value.name.trim(),
      email: form.value.email.trim(),
      telegram: form.value.telegram.trim(),
    });

    isSuccess.value = true;
    localStorage.setItem("leadFormSubmitted", "true");
    resetForm();
  } catch (err: any) {
    const responseData = err?.response?.data;
    console.log(responseData);
    if (
      err?.message?.includes("409") ||
      err?.message?.includes("status: 409")
    ) {
      error.value = "Пользователь с такими данными уже зарегистрирован.";
    } else {
      error.value = "Ошибка при отправке формы. Пожалуйста, попробуйте позже.";
    }
    console.error("Form submission error:", err);
  } finally {
    isLoading.value = false;
  }
};

// Проверяем при монтировании
const checkSubmissionStatus = () => {
  isSuccess.value = localStorage.getItem("leadFormSubmitted") === "true";
};

checkSubmissionStatus();
</script> */
}

// -----------------------------------------------

interface LeadForm {
  name: string;
  telegram: string;
  email: string;
}

export const UiAuthPage = () => {
  // Начальное состояние для формы
  // const initialForm: LeadForm = {
  //   name: '',
  //   telegram: '',
  //   email: '',
  // };

  // const validationSchema = {
  //   email: [
  //     validationRules.required('Email обязателен'),
  //     validationRules.email(),
  //   ],
  // };

  // const submitForm = async () => {
  //   await authUser();
  // };

//   const submitForm = async () => {
//   if (!validateForm()) {
//     error.value = "Пожалуйста, исправьте ошибки в форме";
//     return;
//   }

//   isLoading.value = true;
//   error.value = null;

//   try {
//     await sendLeadForm({
//       name: form.value.name.trim(),
//       email: form.value.email.trim(),
//       telegram: form.value.telegram.trim(),
//     });

//     isSuccess.value = true;
//     localStorage.setItem("leadFormSubmitted", "true");
//     resetForm();
//   } catch (err: any) {
//     const responseData = err?.response?.data;
//     console.log(responseData);
//     if (
//       err?.message?.includes("409") ||
//       err?.message?.includes("status: 409")
//     ) {
//       error.value = "Пользователь с такими данными уже зарегистрирован.";
//     } else {
//       error.value = "Ошибка при отправке формы. Пожалуйста, попробуйте позже.";
//     }
//     console.error("Form submission error:", err);
//   } finally {
//     isLoading.value = false;
//   }
// };

// const submitForm = async () => { 
//   try {
//     await 
//   } catch (error) {
    
//   }
// }

  return (
    <main className={s.authMain}>
      <div className={s.authFormWrapper}>
        <form onSubmit={submitForm} className={s.authForm}>
          <h3 className={s.formTitle}>Authorization</h3>
          <label className={s.label} htmlFor="email">
            Email
          </label>
          <input className={s.input} id="email" type="text" />
          <label className={s.label} htmlFor="password">
            Password
          </label>
          <input
            className={s.input}
            id="password"
            type="text"
            placeholder="password"
          />
          <button className={s.formButton}>
            Authorize
          </button>
        </form>
      </div>
    </main>
  );
};
