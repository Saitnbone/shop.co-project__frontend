import { data } from '../model/data';
import s from './styles.module.scss';

export const UiOrderSummary = () => {
  return (
    <div className={s.orderSummary}>
      <div className={s.orderSummaryContent}>
        <ul className={s.productList}>
          {data.map((item) => (
            <li className={s.productItem} key={item.id}>
              <div className={s.productInfo}>
                <div className={s.imageWrapper}>
                  <img
                    className={s.productImage}
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className={s.productDetails}>
                  <div className={s.productTitleRow}>
                    <h4 className={s.productTitle}>{item.title}</h4>
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
                    <span className={s.productSizeValue}>{item.size}</span>
                  </div>
                  <div className={s.productColor}>
                    <span>Color:</span>
                    <span className={s.productColorValue}>{item.color}</span>
                  </div>
                  <div className={s.priceQuantityRow}>
                    <p className={s.productPrice}>${item.price.toFixed(2)}</p>
                    <div className={s.quantityControl}>
                      <button>-</button>
                      <span className={s.productQuantity}>{item.quantity}</span>
                      <button>+</button>
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
