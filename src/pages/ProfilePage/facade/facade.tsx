import { UiProfilePage } from '../ui/Layout';
import { UserStoreInfo } from '@/widgets/profile-page-widgets/user-store-info';
import { UserPersonalInfo } from '@/widgets/profile-page-widgets/user-personal-info';

export const ProfilePage = () => {
  return <UiProfilePage UserStoreInfo={UserStoreInfo} UserPersonalInfo={UserPersonalInfo} />;
};
