import { AdvantageData } from '../../../types.ts';
import s from './style.module.scss';

export const Advantage: React.FC<AdvantageData> = ({ title, description }) => {
  return (
    <div className={s.advantage}>
      <span className={s.title}>{title}</span>
      <span className={s.description}>{description}</span>
    </div>
  );
};
