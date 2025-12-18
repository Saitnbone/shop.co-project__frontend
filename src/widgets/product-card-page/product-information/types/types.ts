export interface ProductInformationProps {
  ReviewsAndRatings: React.ComponentType<{ onWriteReviewClick: () => void }>; // <-- укажи тип пропсов
  ProductDetails: React.ComponentType;
  ProductFAQ: React.ComponentType;
  onWriteReviewClick: () => void; // <-- добавь это
}
