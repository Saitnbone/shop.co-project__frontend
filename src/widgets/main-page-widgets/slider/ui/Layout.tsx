import { FC } from 'react';
import s from './styles.module.scss';
import CalvinKlein from '@assets/CalvinKlein.svg?react';
import Gucci from '@assets/Gucci.svg?react';
import Prada from '@assets/Prada.svg?react';
import Versace from '@assets/Versace.svg?react';
import Zara from '@assets/Zara.svg?react';
import { FullBg } from '@ui/fullBg';
import clsx from 'clsx';

export const UiSlider: FC = () => {
  return (
    <FullBg className={s.bg}>
      <div className={s.content}>
        <div className={clsx(s.contentIcons, s.animation)}>
          <Versace className={s.versace} />
          <Zara className={s.zara} />
          <Gucci className={s.gucci} />
          <Prada className={s.prada} />
          <CalvinKlein className={s.klein} />

          <Versace className={s.versace} />
          <Zara className={s.zara} />
          <Gucci className={s.gucci} />
          <Prada className={s.prada} />
          <CalvinKlein className={s.klein} />
        </div>
        <div className={clsx(s.contentIcons, s.animation)}>
          <Versace className={s.versace} />
          <Zara className={s.zara} />
          <Gucci className={s.gucci} />
          <Prada className={s.prada} />
          <CalvinKlein className={s.klein} />

          <Versace className={s.versace} />
          <Zara className={s.zara} />
          <Gucci className={s.gucci} />
          <Prada className={s.prada} />
          <CalvinKlein className={s.klein} />
        </div>
      </div>
    </FullBg>
  );
};
