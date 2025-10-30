import { UiCartProps } from '../types/types';
import { cartData } from '../model/data';
import s from './style.module.scss';

export const UiCart = ({ CartItem }: UiCartProps) => {
  return (
    <div>
      <div className={s.sidebarMenu}>
        <div className={s.sidebarMenu__overlay}></div>
        <div className={s.sidebarMenu__content}>
          <div className={s.sidebarMenu__header}>
            <button className={s.sidebarMenu__close}>×</button>
            {cartData.map((cartItem) => (
              <div className={s.header__list} key={cartItem.id}>
                <CartItem cartItem={cartItem} />
              </div>
            ))}
          </div>
          <div className={s.sidebarMenu__contactsInfo}></div>
        </div>
      </div>
    </div>
  );
};

// <ul className={s.productList}>
//   {data.map((item) => (
//     <li className={s.productItem} key={item.id}>
//       <div className={s.productInfo}>
//         <div className={s.imageWrapper}>
//           <img
//             className={s.productImage}
//             src={item.image}
//             alt={item.title}
//           />
//         </div>
//         <div className={s.productDetails}>
//           <div className={s.productTitleRow}>
//             <h4 className={s.productTitle}>{item.title}</h4>
//             <div className={s.deleteIcon}>
//               <img
//                 className={s.deleteIconImage}
//                 src="/delete-icon.svg"
//                 alt="Delete icon"
//               />
//             </div>
//           </div>
//           <div className={s.productSize}>
//             <span>Size:</span>
//             <span className={s.productSizeValue}>{item.size}</span>
//           </div>
//           <div className={s.productColor}>
//             <span>Color:</span>
//             <span className={s.productColorValue}>{item.color}</span>
//           </div>
//           <div className={s.priceQuantityRow}>
//             <p className={s.productPrice}>${item.price.toFixed(2)}</p>
//             <div className={s.quantityControl}>
//               <button>-</button>
//               <span className={s.productQuantity}>{item.quantity}</span>
//               <button>+</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
//   ))}
// </ul>
