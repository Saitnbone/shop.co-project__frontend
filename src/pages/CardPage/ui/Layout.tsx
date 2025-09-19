import { CardPageProps } from '../types/types';
import s from './style.module.scss';

export const UiCardPage = ({
  ProductSettings,
  ProductInformation,
  Recommendations,
}: CardPageProps) => {
  return (
    <main className={s.main}>
      <ProductSettings />
      <ProductInformation />
      <Recommendations />
    </main>
  );
};
