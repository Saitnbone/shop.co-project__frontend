// src/widgets/auth-form/ui/Layout.tsx
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc'; 
import { FaFacebook } from 'react-icons/fa';
import s from './styles.module.scss';

export const UiAuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={s.authForm}>
      <div className={s.formContainer}>
        <h2 className={s.title}>
          {isLogin ? 'Log into Shop.co' : 'Create Account'}
        </h2>

        <form className={s.form}>
          {!isLogin && (
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              className={s.input}
              required
            />
          )}

          <input
            id="email"
            type="email"
            placeholder="Email"
            className={s.input}
            required
          />

          <input
            id="password"
            type="password"
            placeholder="Password"
            className={s.input}
            required
          />

          {!isLogin && (
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className={s.input}
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
