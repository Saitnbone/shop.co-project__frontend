import {Button} from '@/shared/ui/button';
import {ButtonColor} from '@/shared/ui/button/types.ts';
import {Input} from '@/shared/ui/input';
import s from './styles.module.scss';
import {Title} from '@/shared/ui/title';
import {textColor} from '@/shared/ui/title/types.ts';
import {MdMailOutline} from "react-icons/md";
import {FullBg} from '@/shared/ui/fullBg';

import {useState} from 'react';

export const UISubscribe = () => {
  const [email, setEmail] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log('Email: ', email);
  };

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <FullBg className={s.bg}>
      <section className={s.subscribe}>
        <div className={s.container}>
          <Title as="h3" className={s.subscribeTitle} color={textColor.secondary}>
            stay upto date about our latest offers
          </Title>
          <form className={s.subscribeForm} onSubmit={handlerSubmit}>
            <Input
              type={'text'}
              placeholder={'Enter your email address'}
              className={s.emailInput}
              icon={<MdMailOutline/>}
              value={email}
              onChange={onChange}
            />
            <Button color={ButtonColor.secondary} className={s.subscribeBtn}>
              Subscribe to Newsletter
            </Button>
          </form>
        </div>
      </section>
    </FullBg>
  );
};
