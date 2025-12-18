import { ComponentType } from 'react';

export type CardPageProps = {
  ProductInformation: ComponentType<{ onWriteReviewClick: () => void }>;
  ProductSettings: ComponentType;
  Recommendations: ComponentType;
  CreateCommentModal: ComponentType<{ isOpen: boolean; onClose: () => void }>;
};
