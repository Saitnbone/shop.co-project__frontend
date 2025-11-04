import { useNavigate } from 'react-router-dom';
import { UiCartProps } from '../types/types';
import { cartData } from '../model/data';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import s from './style.module.scss';

export const UiCart = ({
  toggleDropdown,
  open,
  CartItem,
  LogoUI,
}: UiCartProps) => {
  const navigate = useNavigate();

  const handleGoToCart = () => {
    toggleDropdown();
    navigate('/cart');
  };

  return (
    <div className={`${s.sidebar} ${open ? s.sidebar_open : ''}`}>
      <div className={s.sidebarMenu}>
        <div className={s.sidebarMenu__overlay}></div>
        <div className={s.sidebarMenu__content}>
          <div className={s.sidebarMenu__header}>
            <button onClick={toggleDropdown} className={s.sidebarMenu__close}>
              ×
            </button>
            <h4 className={s.cartTitle}>Cart</h4>
            <div className={s.header__list}>
              {cartData.map((cartItem) => (
                <div className={s.header__list} key={cartItem.id}>
                  <CartItem cartItem={cartItem} />
                </div>
              ))}
            </div>
          </div>
          <div className={s.sidebarMenu__footer}>
            <hr />
            <div className={s.sidebarMenu__sale}>
              <span className={s.sidebarMenu__label}>Sale</span>
              <span className={s.sidebarMenu__salePrice}>10$</span>
            </div>
            <div className={s.sidebarMenu__total}>
              <span className={s.sidebarMenu__label}>Total cost</span>
              <span className={s.sidebarMenu__totalPrice}>120$</span>
            </div>
            <div className={s.sidebarMenu__checkout}>
              <button
                onClick={handleGoToCart}
                className={s.sidebarMenu__checkoutButton}
              >
                Go to cart
              </button>
            </div>
          </div>
          <div className={s.sidebarMenu__contactsInfo}>
            <LogoUI />
            <div className={s.social}>
              <a href="#" className={s.socialIcon}>
                <FaInstagram />
              </a>
              <a href="#" className={s.socialIcon}>
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
