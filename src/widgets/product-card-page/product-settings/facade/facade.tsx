import { SelectImage } from '@/features/product-card-page/select-image';
import { SelectColor } from '@/features/product-card-page/choose-color';
import { ChooseSize } from '@/features/product-card-page/choose-size';
import { ChooseQuantity } from '@/features/product-card-page/choose-quantity';
import { AddToCart } from '@/features/product-card-page/add-to-cart';
import { UiProductSettings } from '../ui/Layout';

export const ProductSettings = () => {
  return (
    <UiProductSettings
      SelectImage={SelectImage}
      SelectColor={SelectColor}
      ChooseSize={ChooseSize}
      ChooseQuantity={ChooseQuantity}
      AddToCart={AddToCart}
    />
  );
};
