import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { loginUser } from '@/features/login-user/api/api';
import { registerUser } from '@/features/register-user/api/api';
import s from './styles.module.scss';

export const UiAuthForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

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
        {error && <div className={s.errorMessage}>{error}</div>}{' '}
        <form onSubmit={handleSubmit} className={s.form}>
          {!isLogin && (
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              className={s.input}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              autoComplete="name"
              required
            />
          )}

          <input
            id="email"
            type="email"
            placeholder="Email"
            className={s.input}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            autoComplete="email"
            required
          />

          <input
            id="password"
            type="password"
            placeholder="Password"
            className={s.input}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            autoComplete="current-password"
            required
          />

          {!isLogin && (
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className={s.input}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              autoComplete="new-password"
              required
            />
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
          <button className={s.socialButton}>
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
