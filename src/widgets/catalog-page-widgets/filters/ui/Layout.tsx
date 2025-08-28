import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { TFilterProps } from '../types/types';
import filtersIcon from '@assets/catalog-page/filters-icon.svg';
import s from './styles.module.scss';

export const UiCatalogFilters = ({ filteredProductTypes }: TFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className={s.filters}>
      <div className={s.filtersHeader}>
        <h2 className={s.filtersTitle}>Filters</h2>
        <div onClick={() => setIsOpen(!isOpen)} className={s.filterIconWrapper}>
          <img className={s.filterIcon} src={filtersIcon} alt="" />
        </div>
      </div>
      <CSSTransition
        in={isOpen}
        timeout={500}
        classNames={{
          enter: s.filtersContentEnter,
          enterActive: s.filtersContentEnterActive,
          exit: s.filtersContentExit,
          exitActive: s.filtersContentExitActive,
        }}
        unmountOnExit
      >
        <div className={s.filtersContent}>
          <div>{filteredProductTypes}</div>
          <button className={s.applyFiltersButton}>Apply Filters</button>
        </div>
      </CSSTransition>
    </section>
  );
};
