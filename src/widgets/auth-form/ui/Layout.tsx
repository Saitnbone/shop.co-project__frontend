import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { loginUser } from '@/features/login-user/api/api';
import { registerUser } from '@/features/register-user/api/api';
import { useFormValidation } from '../lib/useFormValidation';
import { validationRules } from '../lib/validationRules';
import { inputFilters } from '../lib/inputFilters';
import s from './styles.module.scss';

export const UiAuthForm = () => {
  const params = new URLSearchParams(window.location.search);
  const errorGoogle = params.get('error');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validationSchema = {
    name: [
      validationRules.required(),
      validationRules.minLength(2),
      validationRules.maxLength(100),
      validationRules.name(),
    ],
    email: [validationRules.required(), validationRules.email()],
    password: [
      validationRules.required(),
      validationRules.minLength(6),
      validationRules.maxLength(100),
    ],
    confirmPassword: isLogin
      ? []
      : [
          validationRules.required(),
          validationRules.minLength(6),
          validationRules.maxLength(100),
        ],
  };

  const {
    // form,
    touched,
    errors,
    // validateForm,
    handleFieldChange,
    handleFieldBlur,
    // isFormValid,
    // resetForm,
  } = useFormValidation(formData, validationSchema);

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filteredInput = inputFilters.nameFilter(event.target.value);
    handleFieldChange('name', filteredInput);
    setFormData({ ...formData, name: filteredInput });
  };
  const handleEmailInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filteredInput = inputFilters.emailFilter(event.target.value);
    handleFieldChange('email', filteredInput);
    setFormData({ ...formData, email: filteredInput });
  };
  const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filteredInput = inputFilters.passwordFilter(event.target.value);
    handleFieldChange('password', filteredInput);
    setFormData({ ...formData, password: filteredInput });
  };
  const handleConfirmPasswordInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const filteredInput = inputFilters.passwordFilter(event.target.value);
    handleFieldChange('confirmPassword', filteredInput);
    setFormData({ ...formData, confirmPassword: filteredInput });
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (isLogin) {
        // User is logged in
        await loginUser({
          login: formData.email,
          password: formData.password,
        });
        navigate('/');
      } else {
        // Registration mode
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          return;
        }
        // User is not logged in
        await registerUser({
          username: formData.name,
          email: formData.email,
          password: formData.password,
        });
        navigate('/');
      }
    } catch (err) {
      setError(
        isLogin
          ? 'Login failed. Check your credentials.'
          : 'Registration failed. Try again.'
      );
      console.error(err);
    }
  };

  return (
    <div className={s.authForm}>
      <div className={s.formContainer}>
        <h2 className={s.title}>
          {isLogin ? 'Log into Shop.co' : 'Create Account'}
        </h2>
        <div>
          {errorGoogle === 'google_auth_failed' && (
            <p className={s.fieldError}>Google authorization failed</p>
          )}
        </div>
        {error && <div className={s.errorMessage}>{error}</div>}{' '}
        <form onSubmit={handleSubmit} className={s.form}>
          {!isLogin && (
            <div>
              <input
                id="name"
                type="text"
                placeholder="Full Name"
                className={s.input}
                value={formData.name}
                onBlur={() => handleFieldBlur('name')}
                onChange={handleNameInput}
                autoComplete="name"
                required
              />
              {errors.name && touched.name && (
                <div className={s.fieldError}>{errors.name}</div>
              )}
            </div>
          )}

          <div>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className={s.input}
              value={formData.email}
              onBlur={() => handleFieldBlur('email')}
              onChange={handleEmailInput}
              autoComplete="email"
              required
            />
            {errors.email && touched.email && (
              <div className={s.fieldError}>{errors.email}</div>
            )}
          </div>

          <div>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className={s.input}
              value={formData.password}
              onChange={handlePasswordInput}
              onBlur={() => handleFieldBlur('password')}
              autoComplete="current-password"
              required
            />
            {errors.password && touched.password && (
              <div className={s.fieldError}>{errors.password}</div>
            )}
          </div>

          {!isLogin && (
            <div>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className={s.input}
                onBlur={() => handleFieldBlur('confirmPassword')}
                onChange={handleConfirmPasswordInput}
                autoComplete="new-password"
                required
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <div className={s.fieldError}>{errors.confirmPassword}</div>
              )}
            </div>
          )}

          {isLogin && (
            <span className={s.forgotPassword}>Forgot your password?</span>
          )}

          <div className={s.buttonContainer}>
            <button type="submit" className={s.button}>
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </div>
        </form>
        <div className={s.divider}>
          <span className={s.dividerLine}></span>
          <span className={s.dividerText}>Or continue with</span>
          <span className={s.dividerLine}></span>
        </div>
        <div className={s.socialButtons}>
          <button
            onClick={() =>
              (window.location.href =
                'http://localhost:3000/api/users/login/google')
            }
            className={s.socialButton}
          >
            <FcGoogle size={20} />
            <span>Google</span>
          </button>
          <button className={s.socialButton}>
            <FaFacebook size={20} color="#1877F2" />
            <span>Facebook</span>
          </button>
        </div>
        <span className={s.toggleMode}>
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <span className={s.toggleLink} onClick={toggleMode}>
            {isLogin ? 'Sign up' : 'Log in'}
          </span>
        </span>
      </div>
    </div>
  );
};
