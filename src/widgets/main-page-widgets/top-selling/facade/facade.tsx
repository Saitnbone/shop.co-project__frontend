import { FC } from 'react';
import { CardTemplate } from '@/shared/ui/card-template';
import { UiTopSelling } from '../ui/Layout';

export const TopSelling: FC = () => {
  return <UiTopSelling cardTemplate={CardTemplate} />;
};
