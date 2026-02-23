import { UiMainPage } from '../ui/Layout';
import { Slider } from '@/widgets/main-page-widgets/slider';
import { NewArrivals } from '@/widgets/main-page-widgets/new-arrivals';
import { TopSelling } from '@/widgets/main-page-widgets/top-selling';
import { DressStyle } from '@/widgets/main-page-widgets/dress-style';
import { HappyCustomers } from '@/widgets/main-page-widgets/happy-customers';
import { Cover } from '@/widgets/main-page-widgets/cover';

export const MainPage = () => {
  return (
    <UiMainPage
      cover={<Cover />}
      slider={<Slider />}
      newArrivals={<NewArrivals />}
      topSelling={<TopSelling />}
      dressStyle={<DressStyle />}
      happyCustomers={<HappyCustomers />}
    />
  );
};
