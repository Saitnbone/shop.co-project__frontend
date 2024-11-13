import {IoIosSearch} from "react-icons/io";
import s from '../../styles.module.scss';

export const UiSearchIcon: React.FC = () => {
  return (
    <span>
      <IoIosSearch className={s.searchIcon}/>
    </span>
  );
};
