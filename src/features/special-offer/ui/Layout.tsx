import s from './styles.module.scss';

export const UISpecialOffer = () => {
  return (
    <div className={s.fullBg}>
      <section className={s.content}>
        <div className={s.text}>
          Sign up and get 20% off to your first order.{' '}
          <a href="#" className={s.link}>
            Sign Up Now
          </a>
        </div>
        <button className={s.button} onClick={() => console.log('click')}>
          X
        </button>
      </section>
    </div>
  );
};
