import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/providers/store';
import s from './styles.module.scss';
import { setQuantity } from '@/entities/product/model/productSlice';

export const UiChooseQuantity = () => {
  const dispatch = useDispatch();
  const quantity = useSelector(
    (state: RootState) => state.selectedProduct.quantity
  );

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(setQuantity(quantity - 1));
    }
  };

  const handleIncrement = () => {
    dispatch(setQuantity(quantity + 1));
  };

  return (
    <div className={s.chooseQuantity}>
      <button className={s.button} onClick={handleDecrement}>
        -
      </button>
      <span className={s.quantity}>{quantity}</span>
      <button className={s.button} onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};
