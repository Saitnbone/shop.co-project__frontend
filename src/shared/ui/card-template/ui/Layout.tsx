import { IItemType } from '../types/types';
import s from './styles.module.scss';

export const UiCardTemplate = ({ item }: { item: IItemType }) => {
  return (
    <div className={s.item} key={item.id}>
      <img className={s.itemImage} src={item.imageUrl} alt="image" />
      <div className={s.itemInfo}>
        <h4 className={s.itemTitle}>{item.title}</h4>
        <div className={s.itemRatingBlock}>
          <div>
            <img src="/star.png" alt="Star" />
            <img src="/star.png" alt="Star" />
            <img src="/star.png" alt="Star" />
            <img src="/star.png" alt="Star" />
            <img src="/star.png" alt="Star" />
          </div>
          <div className={s.itemRating}>
            <span>{item.rating}</span>
            <span> / 5</span>
          </div>
        </div>
        <div>
          <span className={s.itemPrice}>${item.price}</span>
        </div>
      </div>
    </div>
  );
};
