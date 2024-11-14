import { LogoUI } from '@/shared/ui/logo';
import { UiFooter } from '@/widgets/footer/ui/Layout.tsx';

export const Footer: React.FC = () => {
  return <UiFooter logo={<LogoUI />}></UiFooter>;
};
