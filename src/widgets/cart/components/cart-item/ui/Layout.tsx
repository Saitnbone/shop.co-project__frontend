import { useState, useRef, useCallback } from 'react';
import { CartApi } from '@/features/cart/api';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/app/providers/store';
import {
  addItemOptimistic,
  removeItemOptimistic,
  fetchCartData,
} from '@/shared/slice/cartSlice';
import { ICartItem } from '../types/types';
import s from './style.module.scss';

export const UiCartItem = ({ cartItem }: { cartItem: ICartItem }) => {
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector((state: RootState) => state.userInfo.userInfo?.id);
  const [localQuantity, setLocalQuantity] = useState(cartItem.quantity);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const initialQuantityRef = useRef(cartItem.quantity);

  const sendQuantityUpdate = useCallback(
    async (newQuantity: number) => {
      if (!userId) return;
      const delta = newQuantity - initialQuantityRef.current;
      if (delta === 0) return;

      dispatch(addItemOptimistic({ ...cartItem, quantity: delta }));

      try {
        let response;
        if (delta > 0) {
          response = await CartApi.addQuantityCartItem(
            userId,
            cartItem.variantId,
            delta
          );
          dispatch(fetchCartData(userId));
        } else {
          response = await CartApi.removeQuantityCartItem(
            userId,
            cartItem.variantId,
            -delta
          );
          dispatch(fetchCartData(userId));
        }
        console.log('Quantity updated:', response);
        initialQuantityRef.current = newQuantity;
      } catch (error) {
        console.error('Error updating quantity:', error);
        setLocalQuantity(initialQuantityRef.current);
        dispatch(removeItemOptimistic(cartItem.variantId));
      }
    },
    [userId, dispatch, cartItem]
  );

  const handleQuantityChange = useCallback(
    (change: number) => {
      const newQuantity = Math.max(0, localQuantity + change);
      setLocalQuantity(newQuantity);

      if (debounceRef.current) clearTimeout(debounceRef.current);

      debounceRef.current = setTimeout(() => {
        sendQuantityUpdate(newQuantity);
      }, 500);
    },
    [localQuantity, sendQuantityUpdate]
  );

  // Удаление целой позици из корзины
  const handleRemoveItem = async (
    userId: string | undefined,
    variantId: string
  ) => {
    try {
      if (!userId) {
        console.error('User ID is not available');
        return;
      }
      const response = await CartApi.removeCartItem(userId, variantId);
      dispatch(removeItemOptimistic(variantId));
      dispatch(fetchCartData(userId));
      console.log('Cart item quantity updated:', response);
    } catch (error) {
      console.error('Error updating cart item quantity:', error);
    }
  };

  return (
    <div className={s.productItem} key={cartItem.variantId}>
      <div className={s.productInfo}>
        <div className={s.imageWrapper}>
          <img
            className={s.productImage}
            // src={cartItem.image}
            src="/d40da9a3a7234235e66d6695d9d7098fc3289872.png"
            alt={cartItem.name}
          />
        </div>
        <div className={s.productDetails}>
          <div className={s.productTitleRow}>
            <span className={s.productTitle}>{cartItem.name}</span>
            <button
              onClick={() => handleRemoveItem(userId, cartItem.variantId)}
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
            <span className={s.productSizeValue}>{cartItem.size}</span>
          </div>
          <div className={s.productColor}>
            <span>Color:</span>
            <span className={s.productColorValue}>{cartItem.color}</span>
          </div>
          <div className={s.priceQuantityRow}>
            <p className={s.productPrice}>${cartItem.price}</p>
            <div className={s.quantityControl}>
              <button onClick={() => handleQuantityChange(-1)}>-</button>
              <span className={s.productQuantity}>{localQuantity}</span>
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
