import React from 'react';
import { TUiMainPage } from '../types';
import s from './styles.module.scss';

export const UiMainPage: React.FC<TUiMainPage> = ({ cover, slider }) => {
  return (
    <main className={s.main}>
      <section className={s.greetings}>
        {cover}
      </section>
      {slider}
      <section className={s.newArrivals}></section>
      <section className={s.topSelling}></section>
      <section className={s.browseBy}></section>
      <section className={s.happyCustomers}></section>
    </main>
  );
};
