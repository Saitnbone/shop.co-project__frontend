import s from './styles.module.scss';
import { Button } from '@/shared/ui/button';
import { RxCross1 } from 'react-icons/rx';
import { ButtonColor, ButtonType } from '@/shared/ui/button/types.ts';
import clsx from 'clsx';
import { useState } from 'react';

export const UISpecialOffer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleClick = () => {
    setIsClosing(true);
  };

  const handleAnimationEnd = () => {
    if (isClosing) {
      setIsVisible(false);
    }
  };

  return (
    isVisible && (
      <div
        className={clsx(s.fullBg, isClosing && s.fadeOut)}
        onAnimationEnd={handleAnimationEnd}
      >
        <section className={s.content}>
          <div className={s.text}>
            Sign up and get 20% off your first order.{' '}
            <a href="#" className={s.link}>
              Sign Up Now
            </a>
          </div>
          <Button
            onClick={handleClick}
            className={s.buttonCross}
            color={ButtonColor.icon}
            type={ButtonType.button}
          >
            <RxCross1 />
          </Button>
        </section>
      </div>
    )
  );
};
