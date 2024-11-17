import s from './styles.module.scss';
import {TUiFooter} from '../types.ts';
import {footerData} from './mockFooterData.tsx';
import {FooterLinkGroup} from './components/footer-link/FooterLinkGroup.tsx';
import {FullBg} from '@/shared/ui/fullBg';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
} from 'react-icons/fa';
import {FaXTwitter} from "react-icons/fa6";
import visaLogo from '@/shared/assets/visaLogo.svg'
import paypalLogo from '@/shared/assets/paypalLogo.svg'
import masterLogo from '@/shared/assets/masterLogo.svg'
import applepayLogo from '@/shared/assets/applepayLogo.svg'
import gpayLogo from '@/shared/assets/gpayLogo.svg'

export const UiFooter: React.FC<TUiFooter> = ({logo}) => {
  return (
    <FullBg className={s.bg}>
      <footer className={s.footer}>
        <div className={s.footerBlock}>
          <div className={s.blockLogo}>
            {logo}
            <p className={s.text}>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className={s.social}>
              <a href="#" className={s.socialLink}><FaXTwitter className={s.socialIcon}/></a>
              <a href="#" className={s.socialLink}><FaFacebookF className={s.socialIcon}/></a>
              <a href="#" className={s.socialLink}><FaInstagram className={s.socialIcon}/></a>
              <a href="#" className={s.socialLink}><FaGithub className={s.socialIcon}/></a>
            </div>
          </div>
          <div className={s.blockLinks}>
            {footerData.map((group, index) => (
              <FooterLinkGroup
                key={index}
                title={group.title}
                links={group.links}
                className={s.link}
              />
            ))}
          </div>
          <div className={s.bottom}>
            <p className={s.textCo}>
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className={s.payment}>
              <div className={s.paymentCard}>
                <img src={visaLogo} alt="Visa" loading='lazy'/>
              </div>
              <div className={s.paymentCard}>
                <img src={paypalLogo} alt="PayLal" loading='lazy'/>
              </div>
              <div className={s.paymentCard}>
                <img src={masterLogo} alt="MasterCard" loading='lazy'/>
              </div>
              <div className={s.paymentCard}>
                <img src={applepayLogo} alt="ApplePay" loading='lazy'/>
              </div>
              <div className={s.paymentCard}>
                <img src={gpayLogo} alt="GooglePay" loading='lazy'/>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </FullBg>
  );
};
