import { IoSearch } from "react-icons/io5";
import s from '../../styles.module.scss'

export const UiMobileSearchIcon: React.FC = () =>{
    return(<span>
        <IoSearch className={s.mobileSearchIcon}/>
    </span>)
}