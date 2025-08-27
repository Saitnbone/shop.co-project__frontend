import { LogoUI } from '@/shared/ui/logo';
import { UiFooter } from '@/widgets/footer/ui/Layout.tsx';
import { Subscribe } from '@/features/subscribe';

export const Footer: React.FC = () => {
  return <UiFooter logo={<LogoUI />} subscribe={<Subscribe />} />;
};
