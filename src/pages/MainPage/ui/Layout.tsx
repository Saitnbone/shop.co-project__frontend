import React from 'react';
import { TUiMainPage } from '../types/types';
import s from './styles.module.scss';

export const UiMainPage: React.FC<TUiMainPage> = ({
  cover,
  slider,
  newArrivals,
  topSelling,
  dressStyle,
  happyCustomers,
}) => {
  return (
    <main className={s.main}>
      <section className={s.greetings}>{cover}</section>
      {slider}
      <section className={s.newArrivals}>{newArrivals}</section>
      <section className={s.topSelling}>{topSelling}</section>
      <section className={s.dressStyle}>{dressStyle}</section>
      <section className={s.happyCustomers}>{happyCustomers}</section>
    </main>
  );
};
