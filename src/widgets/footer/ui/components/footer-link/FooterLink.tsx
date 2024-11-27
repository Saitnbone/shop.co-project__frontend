import { IFooterLink } from "@/widgets/footer/types";

export const FooterLink: React.FC<IFooterLink> = ({ name, url }) => (
  <a href={url}>{name}</a>
);
