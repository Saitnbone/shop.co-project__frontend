import s from './SearchInput.module.scss';
import style from '../../styles.module.scss';
import { IoIosSearch } from 'react-icons/io';

export const UiSearchInput: React.FC = () => {
  return (
    <div className={s.search}>
      <form className={s.searchForm}>
        <IoIosSearch className={`${style.searchIcon} ${s.searchFormIcon}`} />
        <input
          type="text"
          placeholder="Search for products..."
          className={s.searchInput}
        />
      </form>
    </div>
  );
};
