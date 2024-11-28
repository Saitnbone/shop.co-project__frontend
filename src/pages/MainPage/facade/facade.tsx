import { UiMainPage } from '../ui/Layout';
import { Slider } from '@/features/slider';
import { Cover } from '@/widgets/cover';

export const MainPage = () => {
  return <UiMainPage cover={<Cover />} slider={<Slider />} />;
};
