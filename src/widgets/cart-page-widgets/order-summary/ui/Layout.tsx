import { useCallback, useEffect } from 'react';
import { CartApi } from '@/features/cart/api';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/app/providers/store';
import {
  addItemOptimistic,
  removeItemOptimistic,
  fetchCartData,
} from '@/shared/slice/cartSlice';
import { ICartItem } from '../types/types';
import s from './styles.module.scss';

export const UiOrderSummary = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector((state: RootState) => state.userInfo.userInfo?.id);
  const cartData = useSelector((state: RootState) => state.cart);

  const sendQuantityUpdate = useCallback(
    async (newQuantity: number, cartItem: ICartItem) => {
      if (!userId) return;
      const delta = newQuantity - cartItem.quantity; // Используй cartItem.quantity вместо initialQuantityRef
      if (delta === 0) return;

      dispatch(addItemOptimistic({ ...cartItem, quantity: delta }));
      try {
        if (delta > 0) {
          await CartApi.addQuantityCartItem(userId, cartItem.variantId, delta);
        } else {
          await CartApi.removeQuantityCartItem(
            userId,
            cartItem.variantId,
            -delta
          );
        }
        dispatch(fetchCartData(userId));
      } catch (error) {
        console.error('Error updating quantity:', error);
        dispatch(removeItemOptimistic(cartItem.variantId));
      }
    },
    [userId, dispatch]
  );

  const handleQuantityChange = useCallback(
    (change: number, cartItem: ICartItem) => {
      const newQuantity = Math.max(0, cartItem.quantity + change); // Используй cartItem.quantity
      sendQuantityUpdate(newQuantity, cartItem);
    },
    [sendQuantityUpdate]
  );

  const handleRemoveItem = async (variantId: string) => {
    if (!userId) return;
    try {
      await CartApi.removeCartItem(userId, variantId);
      dispatch(removeItemOptimistic(variantId));
      dispatch(fetchCartData(userId));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  useEffect(() => {
    if (userId) {
      dispatch(fetchCartData(userId));
    }
  }, [userId, dispatch]);

  return (
    <div className={s.orderSummary}>
      <div className={s.orderSummaryContent}>
        <ul className={s.productList}>
          {cartData.items.map((item) => (
            <li className={s.productItem} key={item.variantId}>
              <div className={s.productInfo}>
                <div className={s.imageWrapper}>
                  <img
                    className={s.productImage}
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className={s.productDetails}>
                  <div className={s.productTitleRow}>
                    <h4 className={s.productTitle}>{item.name}</h4>
                    <button
                      onClick={() => handleRemoveItem(item.variantId)}
                      className={s.deleteIcon}
                    >
                      <img
                        className={s.deleteIconImage}
                        src="/delete-icon.svg"
                        alt="Delete icon"
                      />
                    </button>
                  </div>
                  <div className={s.productSize}>
                    <span>Size:</span>
                    <span className={s.productSizeValue}>{item.size}</span>
                  </div>
                  <div className={s.productColor}>
                    <span>Color:</span>
                    <span className={s.productColorValue}>{item.color}</span>
                  </div>
                  <div className={s.priceQuantityRow}>
                    <p className={s.productPrice}>${item.price}</p>
                    <div className={s.quantityControl}>
                      <button onClick={() => handleQuantityChange(-1, item)}>
                        -
                      </button>
                      <span className={s.productQuantity}>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(1, item)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
