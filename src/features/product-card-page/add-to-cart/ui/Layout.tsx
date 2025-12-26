import { addToCart } from '../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/providers/store';
import { openModal } from '@/shared/ui/notification-modal/store/notificationModalStore';
import s from './styles.module.scss';

export const UiAddToCart = () => {
  const dispatch = useDispatch();

  const userInfo = useSelector((state: RootState) => state.userInfo.userInfo);

  const variantId = useSelector(
    (state: RootState) => state.selectedProduct.currentVariantId
  );

  const quantity = useSelector(
    (state: RootState) => state.selectedProduct.quantity
  );

  const handleAddToCart = async () => {
    console.log('Adding to cart:', { variantId, quantity });
    if (!userInfo || !userInfo.id) {
      dispatch(
        openModal({
          titleText: 'Error',
          modalMessage: 'You must be logged in to add items to the cart.',
          eventType: 'error',
        })
      );
      return;
    }

    try {
      if (!variantId) {
        dispatch(
          openModal({
            titleText: 'Error',
            modalMessage:
              'Please select product color and size before adding to cart.',
            eventType: 'error',
          })
        );
        console.error('Variant ID is null. Cannot add to cart.');
        return;
      }
      await addToCart(userInfo.id, {
        variantId: variantId,
        quantity: quantity,
      });

      dispatch(
        openModal({
          titleText: 'Success!',
          modalMessage: 'Product added to cart.',
          eventType: 'success',
        })
      );
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  };

  return (
    <div onClick={() => handleAddToCart()} className={s.addToCart}>
      <span>Add to cart</span>
    </div>
  );
};
