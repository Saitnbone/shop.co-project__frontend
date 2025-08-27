import { IFooterLinkGroup } from '@/widgets/footer/types/types';
import { FooterLink } from '@/widgets/footer/ui/components/footer-link/FooterLink.tsx';
import s from './styles.module.scss';
import clsx from 'clsx';

export const FooterLinkGroup: React.FC<IFooterLinkGroup> = ({
  title,
  links,
  className,
}) => (
  <div className={clsx(s.content, className)}>
    <h4 className={s.title}>{title}</h4>
    <ul className={s.list}>
      {links.map((link, index) => (
        <li key={index}>
          <FooterLink url={link.url} name={link.name} />
        </li>
      ))}
    </ul>
  </div>
);
