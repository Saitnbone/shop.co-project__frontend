import { UiCardTemplate } from '../ui/Layout';
import { IProduct } from '../types/types';

export const CardTemplate = ({ item }: { item: IProduct }) => {
  return <UiCardTemplate item={item} />;
};
