import { FooterLink } from '@/widgets/footer/types.ts';

export const FooterLink: React.FC<FooterLink> = ({ name, url }) => (
  <a href={url}>{name}</a>
);
