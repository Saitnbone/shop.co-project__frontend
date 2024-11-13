import s from './styles.module.scss';

export const UiMainPage = () => {
  return (
    <main className={s.main}>
      В разработке
      <section className={s.greetings}></section>
      <section className={s.newArrivals}></section>
      <section className={s.topSelling}></section>
      <section className={s.browseBy}></section>
      <section className={s.happyCustomers}></section>
    </main>
  );
};
