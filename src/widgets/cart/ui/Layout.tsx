import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/app/providers/store';
import { fetchCartData } from '@/shared/slice/cartSlice';
import { useNavigate } from 'react-router-dom';
import { UiCartProps } from '../types/types';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import s from './style.module.scss';

export const UiCart = ({
  toggleDropdown,
  open,
  CartItem,
  LogoUI,
}: UiCartProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: cartData, totalCost } = useSelector(
    (state: RootState) => state.cart
  );
  const userId = useSelector((state: RootState) => state.userInfo.userInfo?.id);
  const navigate = useNavigate();

  const handleGoToCart = () => {
    toggleDropdown();
    navigate('/cart');
  };

  useEffect(() => {
    if (userId) {
      dispatch(fetchCartData(userId));
    }
  }, [userId, dispatch]);

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
                <div className={s.header__list} key={cartItem.variantId}>
                  <CartItem cartItem={cartItem} />
                </div>
              ))}
            </div>
          </div>
          <div className={s.sidebarMenu__footer}>
            <hr />
            <div className={s.sidebarMenu__total}>
              <span className={s.sidebarMenu__label}>Total cost</span>
              <span className={s.sidebarMenu__totalPrice}>{totalCost}$</span>
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
