import { UiCreateCommentModal } from '../ui/Layout';

interface CreateCommentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateCommentModal = ({
  isOpen,
  onClose,
}: CreateCommentModalProps) => {
  return <UiCreateCommentModal isOpen={isOpen} onClose={onClose} />;
};
