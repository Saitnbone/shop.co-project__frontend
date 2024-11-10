import { UiHeader } from '../ui/Layout';
import { LogoUI } from '@/shared/ui/logo';
import { DropdownUI } from '@/shared/ui/dropdown/Dropdown';

export const Header: React.FC = () => {
  return <UiHeader logo={<LogoUI />} dropDown={<DropdownUI />}></UiHeader>;
};
