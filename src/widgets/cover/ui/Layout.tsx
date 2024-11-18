import {AdvantageList} from '@/widgets/cover/ui/components/advantages/Advantage-list.tsx';
import s from "./styles.module.scss";
import {FullBg} from '@/shared/ui/fullBg';
import {Button} from "@/shared/ui/button";
import {ButtonColor} from "@/shared/ui/button/types.ts";
import {Title} from "@/shared/ui/title";
import {textColor} from "@/shared/ui/title/types.ts";
import image from '../../../shared/assets/people.png'


export const UiCover: React.FC = () => {
  return (
    <FullBg className={s.bg}>
      <div className={s.cover}>
        <div className={s.textBlock}>
          <Title as='h1' className={s.title} color={textColor.primary}>FIND CLOTHES THAT MATCHES YOUR STYLE</Title>
          <p className={s.text}>Browse through our diverse range of meticulously crafted garments, designed to bring out
            your individuality and cater to your sense of style.</p>
          <Button color={ButtonColor.primary} className={s.button}>Shop Now</Button>
          <AdvantageList/>
        </div>
        <div className={s.imageBlock}>
          <img src={image} alt="People"/>
        </div>
      </div>
    </FullBg>
  )
};
