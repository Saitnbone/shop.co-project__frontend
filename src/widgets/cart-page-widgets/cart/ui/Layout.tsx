import s from './styles.module.scss';

export const UiCart = () => {
  return (
    <div className={s.cart}>
      <div className={s.cartContent}>
        <h3 className={s.cartTitle}>Order Summary</h3>
        <div className={s.costDetails}>
          <div className={s.costDetailRow}>
            <span className={s.costDetailLabel}>Subtotal</span>
            <span className={s.costDetailValue}>$215.00</span>
          </div>
          <div className={s.costDetailRow}>
            <span className={s.costDetailLabel}>Discount (20%)</span>
            <span className={`${s.costDetailValue} ${s.discountValue}`}>
              -113$
            </span>
          </div>
          <div className={s.costDetailRow}>
            <span className={s.costDetailLabel}>Delivery Fee</span>
            <span className={s.costDetailValue}>$15.00</span>
          </div>
        </div>
        <div>
          <div className={s.totalAmount}>
            <span className={s.totalLabel}>Total</span>
            <span className={`${s.costDetailValue} ${s.totalValue}`}>
              $117.00
            </span>
          </div>
        </div>
        <div className={s.promoCode}>
          <input
            className={s.promoInput}
            type="text"
            placeholder="Add promo code"
          />
          <button className={s.promoButton}>Apply</button>
        </div>
        <button className={s.checkoutButton}>
          <span>Go to checkout</span>
          <img src="/arrow.svg" alt="Arrow" />
        </button>
      </div>
    </div>
  );
};
