import s from './Dropdown.module.scss';
import { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

export const DropdownUI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const dropdown = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClickOutside = (evt: MouseEvent) => {
    if (dropdown.current && !dropdown.current.contains(evt.target as Node)) {
      setIsOpen(false);
    }
  };

  return (
    <div className={s.dropdown} ref={dropdown}>
      <a
        className={isOpen ? `${s.menuItem} ${s.active}` : s.menuItem}
        onClick={handleDropdownClick}
      >
        Shop
        <span className={s.arrowIcon}>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </a>
      {isOpen && (
        <ul className={s.menu}>
          <li>
            <a href="#" target="_blank">
              Man
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Woman
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Children
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};
