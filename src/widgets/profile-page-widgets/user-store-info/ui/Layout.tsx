import { ordersData } from '../model/data';
import s from './styles.module.scss';

export const UiUserStoreInfo = () => {
  return (
    <div className={s.userStoreInfo}>
      <div className={s.userStoreContainer}>
        <h2 className={s.title}>User Store Information</h2>
        <ul className={s.ordersList}>
          {ordersData.map((order) => (
            <li key={order.orderNumber} className={s.orderItem}>
              <div className={s.infoRow}>
                <span>Order number:</span>
                <span># {order.orderNumber}</span>
              </div>
              <div className={s.infoRow}>
                <span>Order date:</span>
                <span>{order.orderDate}</span>
              </div>
              <div className={s.infoRow}>
                <span>Shipping address:</span>
                <span>{order.shippingAddress}</span>
              </div>
              <div className={s.infoRow}>
                <span>Status:</span>
                <span
                  className={`${s.orderStatus} ${order.status === 'In delivery' ? s.active : order.status === 'Not delivered' ? s.notDelivered : s.delivered}`}
                >
                  {order.status}
                </span>
              </div>
              <div className={s.infoRow}>
                <span className={s.orderTotal}>Total:</span>
                <span className={s.orderTotalValue}>{order.total}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
