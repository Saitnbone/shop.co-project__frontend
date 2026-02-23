import { ICartItem } from '../types/types';
import s from './style.module.scss';

export const UiCartItem = ({ cartItem }: { cartItem: ICartItem }) => {
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
            <div className={s.deleteIcon}>
              <img
                className={s.deleteIconImage}
                src="/delete-icon.svg"
                alt="Delete icon"
              />
            </div>
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
              <button>-</button>
              <span className={s.productQuantity}>{cartItem.quantity}</span>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
