import { Button } from '@ui/button';
import { ButtonColor } from '@ui/button/types.ts';
import { Input } from '@ui/input';
import s from './styles.module.scss';
import { Title } from '@ui/title';
import { textColor } from '@ui/title/types.ts';
import { AiOutlineMail } from 'react-icons/ai';
import { useState } from 'react';

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
    <section className={s.subscribe}>
      <div className={s.container}>
        <Title as="h4" className={s.subscribeTitle} color={textColor.secondary}>
          stay upto date about our latest offers
        </Title>
        <form className={s.subscribeForm} onSubmit={handlerSubmit}>
          <Input
            type={'text'}
            placeholder={'Enter your email address'}
            className={s.emailInput}
            icon={<AiOutlineMail />}
            value={email}
            onChange={onChange}
          />
          <Button color={ButtonColor.secondary} className={s.subscribeBtn}>
            Subscribe to Newsletter
          </Button>
        </form>
      </div>
    </section>
  );
};
