import s from './styles.module.scss';
import { TUiFooter } from '../types.ts';
import { footerData } from './mockFooterData.tsx';
import { FooterLinkGroup } from './components/footer-link/FooterLinkGroup.tsx';
import {
  FaCcApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFacebook,
  FaGithub,
  FaGooglePay,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import { FullBg } from '@ui/fullBg';

export const UiFooter: React.FC<TUiFooter> = ({ logo }) => {
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
              <a href="#" className={s.socialIcon}>
                <FaTwitter />
              </a>
              <a href="#" className={s.socialIcon}>
                <FaFacebook />
              </a>
              <a href="#" className={s.socialIcon}>
                <FaInstagram />
              </a>
              <a href="#" className={s.socialIcon}>
                <FaGithub />
              </a>
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
              <p className={s.paymentCard}>
                <FaCcVisa />
              </p>
              <p className={s.paymentCard}>
                <FaCcMastercard />
              </p>
              <p className={s.paymentCard}>
                <FaCcPaypal />
              </p>
              <p className={s.paymentCard}>
                <FaCcApplePay />
              </p>
              <p className={s.paymentCard}>
                <FaGooglePay />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </FullBg>
  );
};
