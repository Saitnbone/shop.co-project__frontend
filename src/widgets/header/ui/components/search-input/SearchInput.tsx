import s from './SearchInput.module.scss';
import style from '../../styles.module.scss'
import {IoIosSearch} from "react-icons/io";
import {AiOutlineMail} from "react-icons/ai";
import {Input} from "@/shared/ui/input";
import {useState} from "react";

export const UiSearchInput = () => {
  const [search, setSearch] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log('Result: ', search);
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={s.search}>
      <form className={s.searchForm} onSubmit={handlerSubmit}>
        <Input
          type={'text'}
          placeholder={'Search for products...'}
          icon={<IoIosSearch/>}
          value={search}
          onChange={onChange}
        />
      </form>
    </div>
  )
}