import { ProfilePageProps } from '../types/types';
import s from './styles.module.scss';

export const UiProfilePage = ({ UserStoreInfo, UserPersonalInfo }: ProfilePageProps) => {
  return (
    <main className={s.profilePage}>
      <UserStoreInfo />
      <UserPersonalInfo />
    </main>
  );
};
