import { TInput } from './types.ts';
import s from './styles.module.scss';
import clsx from 'clsx';

export const Input: React.FC<TInput> = ({
  type,
  placeholder,
  className,
  icon,
  onChange,
}) => {
  return (
    <div className={clsx(s.inputWrapper, className)}>
      {icon && <span className={s.icon}>{icon}</span>}
      <input
        type={type}
        placeholder={placeholder}
        className={clsx(s.input)}
        onChange={onChange}
      />
    </div>
  );
};
