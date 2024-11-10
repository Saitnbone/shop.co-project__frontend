import s from './Menu.module.scss'
import {DropdownUI} from "../../../../../shared/ui/dropdown/Dropdown.tsx";

export const MenuUI = () => {
  return (
    <nav>
      <ul className={s.menu}>
        <li>
          <DropdownUI/>
        </li>
        <li>
          <a href='#' target='_blank'>On Sale</a>
        </li>
        <li>
          <a href='#' target='_blank'>New Arrivals</a>
        </li>
        <li>
          <a href='#' target='_blank'>Brands</a>
        </li>
      </ul>
    </nav>
  )
}