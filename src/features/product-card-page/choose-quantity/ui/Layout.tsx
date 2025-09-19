import s from './styles.module.scss'

export const UiChooseQuantity = () => {
  return (
    <div className={s.chooseQuantity}>
      <button>-</button>
      <span>1</span>
      <button>+</button>
    </div>
  );
};
