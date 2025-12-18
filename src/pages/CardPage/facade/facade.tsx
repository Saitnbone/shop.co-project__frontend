import { UiCardPage } from '../ui/Layout';
import { ProductInformation } from '@/widgets/product-card-page/product-information';
import { Recommendations } from '@/widgets/product-card-page/recommendations';
import { ProductSettings } from '@/widgets/product-card-page/product-settings';
import { CreateCommentModal } from '@/features/create-comment';

export const CardPage = () => {
  return (
    <UiCardPage
      ProductInformation={ProductInformation}
      ProductSettings={ProductSettings}
      Recommendations={Recommendations}
      CreateCommentModal={CreateCommentModal}
    />
  );
};
