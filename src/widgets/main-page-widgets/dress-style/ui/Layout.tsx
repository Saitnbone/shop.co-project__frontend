import { FC } from 'react';
import s from './styles.module.scss';

export const UiDressStyle: FC = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>BROWSE BY dress STYLE</h2>
      <div className={s.grid}>
        <div className={`${s.item} ${s.casual}`}>
          <span className={s.label}>Casual</span>
          <img
            className={s.imageCasual}
            src="/e1b774aba32d9a769caba77c08e107a9198dcd6d.png"
            alt=""
          />
        </div>
        <div className={`${s.item} ${s.formal}`}>
          <span className={s.label}>Formal</span>
          <img
            className={s.imageFormal}
            src="/e46ed6ac8bdbe2c750dcc6e834bf1d98a4a73b29.png"
            alt=""
          />
        </div>
        <div className={`${s.item} ${s.party}`}>
          <span className={s.label}>Party</span>
          <img
            className={s.imageParty}
            src="/aa19c69e82cd85a823c989c1c8631bd976e2cbfb.png"
            alt=""
          />
        </div>
        <div className={`${s.item} ${s.gym}`}>
          <span className={s.label}>Gym</span>
          <img
            className={s.imageGym}
            src="/fce658e0c17a220fe8bfb1126626f3ab58a761ec.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
