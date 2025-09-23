import { CardPageProps } from '../types/types';
import s from './style.module.scss';

export const UiCardPage = ({
  ProductSettings,
  ProductInformation,
  Recommendations,
}: CardPageProps) => {
  return (
    <main className={s.main}>
      <div className={s.cardPageContentContainer}>
        <ProductSettings />
        <ProductInformation />
        <Recommendations />
      </div>
    </main>
  );
};
