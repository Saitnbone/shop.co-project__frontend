import s from './styles.module.scss';

export const UiChooseQuantity = () => {
  return (
    <div className={s.chooseQuantity}>
      <button className={s.button}>-</button>
      <span className={s.quantity}>1</span>
      <button className={s.button}>+</button>
    </div>
  );
};
