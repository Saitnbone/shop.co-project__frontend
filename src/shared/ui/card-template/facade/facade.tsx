import { UiCardTemplate } from '../ui/Layout';
import { IItemType } from '../types/types';

export const CardTemplate = ({ item }: { item: IItemType }) => {
  return <UiCardTemplate item={item} />;
};
