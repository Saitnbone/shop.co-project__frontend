import { Advantage } from './Advantage.tsx';
import { mockCoverData } from '../../mockCoverData.ts';
import s from './style.module.scss';

export const AdvantageList: React.FC = () => {
  return (
    <div className={s.advantageList}>
      {mockCoverData.map((advantage, index) => (
        <Advantage
          key={index}
          title={advantage.title}
          description={advantage.description}
        />
      ))}
    </div>
  );
};
