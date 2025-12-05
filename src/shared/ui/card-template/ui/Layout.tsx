import { useNavigate } from 'react-router-dom';
import { IProduct } from '../types/types';
import s from './styles.module.scss';

export const UiCardTemplate = ({ item }: { item: IProduct }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/catalog/${item.id}`);
  };

  return (
    <div className={s.item} key={item.id} onClick={handleClick}>
      <img className={s.itemImage} src={item.image} alt="image" />
      <div className={s.itemInfo}>
        <h4 className={s.itemTitle}>{item.name}</h4>
        <div className={s.itemRatingBlock}>
          <div>
            <img src="/star.png" alt="Star" />
            <img src="/star.png" alt="Star" />
            <img src="/star.png" alt="Star" />
            <img src="/star.png" alt="Star" />
            <img src="/star.png" alt="Star" />
          </div>
          <div className={s.itemRating}>
            <span>{item.raiting}</span>
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
